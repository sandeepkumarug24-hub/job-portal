import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import userRoutes from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";
import applicationRouter from "./routes/application.route.js";

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "backend is working",
  });
});

export default app;
