const express = require("express");
const http = require("http");

const app = express();
const server = http.Server(app);

const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

require("dotenv").config({ path: "./config.env" });
const connectDb = require("./utilsServer/connectDb");
const port = process.env.PORT || 3000;

connectDb();

nextApp.prepare().then(() => {
  app.all("*", (req, res) => handle(req, res));
  server.listen(port, (error) => {
    if (error) throw error;
    console.log(`Server is up and running on port ${port}`);
  });
});
