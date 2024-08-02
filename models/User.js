import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  emailOrPhone: String,
  password: String,
  profileImage: String,
  wins: Number,
  carModel: String,
  phoneNumber: String,
  balance: Number,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.model("User", UserSchema);
