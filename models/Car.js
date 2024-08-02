import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  image: String,
  model: String,
  horsepower: Number,
  color: String,
  weight: Number,
  maxSpeed: Number,
  balance: String,
});

export default mongoose.model("Car", CarSchema);
