import express from "express";
import "./config";
import database from "./database";

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.debug(`Running server on port ${PORT}`);

  console.debug("Trying to establish connection to the database.");
  database.connect();
});
