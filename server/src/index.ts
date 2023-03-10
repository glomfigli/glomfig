import express from "express";
import "./config";
import database from "./database";
import userRouter from "./routes/userRoutes";
import configRouter from "./routes/configRoutes";
import sessionRouter from "./routes/sessionRoutes";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", configRouter);
app.use("/api", sessionRouter);

async function run (): Promise<void> {
  await database.connect();
}

app.listen(PORT, () => {
  console.debug(`Running server on port ${PORT}`);

  void run();
});
