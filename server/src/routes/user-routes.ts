import express from "express";

const router = express.Router();



router.post("/api/users", (req: express.Request, res: express.Response) => {
  console.log(req.body);
  res.send("Hello World!");
});

export default router;