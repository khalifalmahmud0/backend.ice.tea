const express = require("express");
const logger = require("./logger");
const morgan = require("morgan");

const app = express();

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.post("/", (req, res) => {
  logger.warn("This is a Warning");
  res.send("This is a Post Request");
});
app.get("/", (req, res) => {
  res.send("This is a Get Request");
});
app.put("/", (req, res) => {
  res.send("This is a Put Request");
});
app.delete("/", (req, res) => {
  res.send("This is a Delete Request");
});
app.listen(5090, "localhost", () => {
  console.log("Server Running in the port 5090");
});
