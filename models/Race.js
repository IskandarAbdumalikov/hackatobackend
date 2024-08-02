import mongoose from "mongoose";

const RaceSchema = new mongoose.Schema({
  image: String,
  numberOfParticipants: Number,
  entryFee: Number,
  laps: Number,
  prizeAmount: Number,
  startDate: Date,
});

export default mongoose.model("Race", RaceSchema);
