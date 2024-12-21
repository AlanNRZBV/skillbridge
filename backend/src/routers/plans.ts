import express from "express";
import { Plan } from "../models/Plan";

const plansRouter = express.Router();

plansRouter.get("/", async (req, res, next) => {
  try {
    console.log("=>(plans.ts:9)");
    const plans = await Plan.find();
    res.json({ message: "k", plans });
  } catch (e) {
    next(e);
  }
});

export default plansRouter;
