import express from "express";


const router = express.Router();

//  await({ username: req.params.name, password: req.params.password}).save();


router.get("/users/:uid", async (req: express.Request,
  res: express.Response) => {
  return res.json({});
});


router.post("/", async (req: express.Request,
  res: express.Response) => {
  return res.json({});
});



export default router;