import mongoose from "mongoose";

let categorySchema = mongoose.Schema(
  {
    name: String,
    description: String,
    images: [
      {
        src: String,
        alt: String,
      },
    ],
  },
  { timestamps: true }
);

let Category = mongoose.model("Category", categorySchema);

export default Category;
