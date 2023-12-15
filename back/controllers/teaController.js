import Tea from "../models/TeaModel.js";

export const TeaController = async (req, res) => {
  try {

    const lastTea = await Tea.find().sort({createdAt: -1}).limit(1)

    res.json(lastTea)
    
} catch (error) {
    res.json({message: "Impossible d'obtenir le dernier thé"})
}
};
