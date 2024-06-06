const http = require("http");
const host = "127.0.0.1";
const port = "4000";

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.end("Success");
  } else {
    res.end("Fail");
  }
});

server.listen(port, host, () => {
  console.log(`Server is Running here ${host}:${port}`);
});
