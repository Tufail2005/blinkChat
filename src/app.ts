import express, { type Express, type Request, type Response } from "express";
import mainRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

//CORS Configuration (CRITICAL for Cookies)
app.use(
  cors({
    origin: "http://localhost:3000", // Your Next.js Frontend URL
    credentials: true, // Allow cookies to be sent
  })
);

app.use("/api", mainRouter);

// Health Check
app.get("/", (req, res) => {
  res.send("Ephemeral Chat Backend is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
