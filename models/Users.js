const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emailOrPhone: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String },
  wins: { type: Number, default: 0 },
  carModel: { type: String },
  phoneNumber: { type: String },
  balance: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", userSchema);
