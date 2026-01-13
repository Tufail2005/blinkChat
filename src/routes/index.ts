import express from "express";
import userRouter from "./authRoutes.js";
import roomRouter from "./roomRoutes.js";

const router = express.Router();

router.use("/auth", userRouter);
router.use("/room", roomRouter);

export default router;
