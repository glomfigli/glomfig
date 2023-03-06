import express from "express";
import "./config";
import database from "./database";
import router from "./routes/user-routes";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use("/api", router);

async function run (): Promise<void> {
  await database.connect();
}

app.listen(PORT, () => {
  console.debug(`Running server on port ${PORT}`);

  void run();
});
