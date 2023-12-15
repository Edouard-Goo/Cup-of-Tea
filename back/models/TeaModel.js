import mongoose from "mongoose";

let teaSchema = mongoose.Schema(
  {
    ref: Number,
    name: String,
    category: String,
    description: String,
    mini_desc: String,
    img_min: String,
    img_big: String,
    orders_count: Number,
    conditioning: [{ libelle: String, price: Number }],
    stock: Number,
  },
  { timestamps: true }
);

let Tea = mongoose.model("Tea", teaSchema);
export default Tea;
