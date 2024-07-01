import "dotenv/config";
import express from "express";
import cors from "cors";
let app = express();

// Common Middleware

app.use(
  cors({
    //Specifies which domains are allowed to make requests to the server.
    origin: process.env.CORS_ORIGIN,
    credentials: true, //When this option is enabled, it allows cookies and other credentials to be sent from the client to the server.
  })
);

app.use(express.json({ limit: "16kb" })); //  Parses JSON payloads in requests, with a size limit of 16KB.

app.use(express.urlencoded({ extended: true, limit: "16kb" })); //Parses URL-encoded payloads in requests, with a size limit of 16KB.

app.use(express.static("public")); //Serves static files from the "public" directory.

export { app };
