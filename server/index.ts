import express from "express";
import "./config";
import database from "./database";

const app = express();
const PORT = 8080;

function run() {
  database.connect();
}

app.listen(PORT, () => {
  console.debug(`Running server on port ${PORT}`);
    
  run();
});
