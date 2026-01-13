import { type Request, type Response } from "express";
import prisma from "../utils/prisma.js";
// 1. Logic to Create a Room
export const createRoom = async (req: Request, res: Response) => {};

// 2. Logic to Find Nearby Rooms
export const getNearbyRooms = async (req: Request, res: Response) => {};

// 3. Edit Room info
export const editRoomsInfo = async (req: Request, res: Response) => {};

// 4. Delete Room
export const DeleteRooms = async (req: Request, res: Response) => {};
