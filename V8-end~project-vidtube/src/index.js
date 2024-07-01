import "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";
let PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, "localhost", () => {
      console.log(`Server Running At Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB Connection Error`, error);
  });
