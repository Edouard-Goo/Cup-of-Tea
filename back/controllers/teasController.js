import Tea from "../models/TeaModel.js";

export const Teas = async (req, res) => {
  try {
    const teas = await Tea.find({})
      .sort({
        _id: 1,
      })
      .limit(1);

    res.json(teas);
  } catch (err) {
    console.log("pas bieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen");
  }
};

export const BestSeller = async (req, res) => {
  try {
    const best = await Tea.find({}).sort({ orders_count: -1 }).limit(1);

    res.json(best);
  } catch (err) {
    console.log("errooooooor");
  }
};

export const Favorite = async (req, res) => {
  try {
    const favor = await Tea.find({}).sort({ stock: -1 }).limit(1);

    res.json(favor);
  } catch (err) {
    console.log("errooooooor");
  }
};
