import mongoose from "mongoose";

let orderSchema = mongoose.Schema(
  {
    date: Date,
    userId: String,
    items: [
      { ref: Number, name: String, conditionning: String, price: Number },
    ],
    total_price: Number,
  },
  { timestamps: true }
);

let Order = mongoose.model("Order", orderSchema);
export default Order;
