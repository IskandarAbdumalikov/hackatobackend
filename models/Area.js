import mongoose from "mongoose";

const AreaSchema = new mongoose.Schema({
  image: String,
  cityName: String,
  description: String,
});

export default mongoose.model("Area", AreaSchema);
