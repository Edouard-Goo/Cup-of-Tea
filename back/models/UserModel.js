import mongoose from "mongoose";

let userSchema = mongoose.Schema(
  {
    login: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      default: "User",
    },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);

export default User;
