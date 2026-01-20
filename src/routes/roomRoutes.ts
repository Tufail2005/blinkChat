import express from "express";
import { protect } from "../middleware/auth.middleware.js";
// Import the Logic
import {
  allJoinedRooms,
  createRoom,
  getNearbyRooms,
  joinRoom,
} from "../controllers/roomController.js";

const router = express.Router();

router.post("/create", protect, createRoom);
router.get("/nearby", protect, getNearbyRooms);
router.post("/join", protect, joinRoom);
router.get("/joined", protect, allJoinedRooms);

export default router;
