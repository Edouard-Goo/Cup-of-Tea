import express from "express";
import { BestSeller, Favorite, Teas } from "../controllers/teasController.js";
import { CatTea, Categories } from "../controllers/grandCrusControllers.js";
import { Detail } from "../controllers/detailsController.js";
import { TeaController } from "../controllers/teaController.js";
import { LoginSubmit, registerSubmit } from "../controllers/userController.js";
import { AddOrder, GetOneOrder, GetOrders, GetOrdersByUser } from "../controllers/orderController.js";

const router = express.Router();

//HOME PAGE

// all Teas
router.get("/", Teas);
//the favorit teas in the collection
router.get("/favor", Favorite);
// Best seller tea
router.get("/best", BestSeller);

//  categories
router.get("/category", Categories);
//Tea by category
router.get("/cattea", CatTea);

router.get("/detail/:id", Detail);

router.get("/teas", TeaController);

router.post("/register", registerSubmit);
router.post("/login", LoginSubmit);

// AJOUTER UNE COMMANDE
router.post("/new-order",AddOrder)

// RECUPERER TOUTES LES COMMANDES
router.get("/orders",GetOrders)

// RECUPERER TOUTES LES COMMANDES D'UN UTILISATEUR
router.get("/orders-user",GetOrdersByUser)

// RECUPERER UNE COMMANDE EN PARTICULIER
router.get("/order/:id", GetOneOrder)

export default router;
