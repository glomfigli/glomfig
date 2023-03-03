import express from "express";
import "./config";
import database from "./database";
import router from "./routes/user-routes";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use("/api", router);



function run() {
  database.connect();
}

app.listen(PORT, () => {
  console.debug(`Running server on port ${PORT}`);
    
  run();
});
