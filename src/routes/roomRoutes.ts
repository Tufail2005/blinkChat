import express from "express";
// Import the Logic
import { createRoom, getNearbyRooms } from "../controllers/roomController.js";

const router = express.Router();

router.post("/", createRoom);
router.get("/nearby", getNearbyRooms);

export default router;
