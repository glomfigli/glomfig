import express from "express";
import "./config";

const app = express();
const PORT = 8080;


app.listen(PORT, () => {
  console.debug(`Running server on port ${PORT}`);
});
