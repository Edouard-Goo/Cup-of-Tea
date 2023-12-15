import mongoose from "mongoose";

//TODO paramétrez ici la connexion à votre base de données
export const connectDB = mongoose.connect(
  "mongodb://127.0.0.1:27017/cup_of_tea"
);

mongoose.connection.on("open", () => {
  console.log("Connexion à la base de données effectuée avec succès");
});

mongoose.connection.on("error", () => {
  console.log("Impossible de se connecter à la BDD");
});
