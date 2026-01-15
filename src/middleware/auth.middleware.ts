import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { type JwtPayload } from "../types/definitions.js"; // Import the interface we defined earlier

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  // 1. Read token specifically from cookies, NOT headers
  const token = req.cookies.auth_token;

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token found" });
    return;
  }

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    // 3. Attach user info to request object
    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
