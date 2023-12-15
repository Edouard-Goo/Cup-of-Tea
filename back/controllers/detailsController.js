import Tea from "../models/TeaModel.js";

export const Detail = async (req, res) => {
  try {
    const {id} = req.params;
    const onetea = await Tea.findById(id);
    console.log(onetea);
    res.json(onetea);
  } catch (err) {
    console.log("details ne marche pas", err);
  }
};
