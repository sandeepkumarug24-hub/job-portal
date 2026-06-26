import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import userRoutes from "./routes/user.route.js";

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "backend is working",
  });
});

export default app;
