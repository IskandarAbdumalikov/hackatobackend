import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import areaRoutes from "./routes/areaRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import raceRoutes from "./routes/raceRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Route middleware
app.use("/api/areas", areaRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/races", raceRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
