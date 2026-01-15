import { z } from "zod";

export const registerSchema = z.object({
  userName: z.string().min(3),
  password: z.string().min(6),
  email: z.string().email().optional(),
});

export const loginSchema = z.object({
  // We accept a string that could be a username OR an email
  identifier: z.string().min(1, "Username or Email is required"),
  password: z.string(),
});

export const createRoomSchema = z.object({
  name: z.string(),
});
