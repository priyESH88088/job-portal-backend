import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route.js";
import jobRoutes from "./routes/job.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/job", jobRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to Job Portal Backend API",
    description: "This API handles authentication and job management system",
    status: "Running Successfully",
    version: "1.0.0",
    endpoints: {
      auth: "/api/v1/auth",
      jobs: "/api/v1/job"
    },
    author: "Priyesh Dwivedi"
  });
});

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
