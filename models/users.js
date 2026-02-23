const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  role: { type: String, enum: ["Manager", "SalesAgent"], required: true },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };