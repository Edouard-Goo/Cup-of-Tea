import Category from "../models/CategoryModel.js";
import Tea from "../models/TeaModel.js";

export const Categories = async (req, res) => {
  try {
    const categs = await Category.find({});
    res.json(categs);
  } catch (err) {
    console.log("errrroooooorrrrrr category");
  }
};

export const CatTea = async (req, res) => {
  try {
    const categTea = await Tea.find({ category: "Oolong" });

    res.json(categTea);
  } catch (err) {
    console.log("errrroooooorrrrrr category");
  }
};
