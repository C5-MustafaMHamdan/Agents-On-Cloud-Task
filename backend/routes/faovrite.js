const express =require("express");

const {getAllFavorite} =require("../controllers/favorite")

const authentication = require("../middleware/authentication");

const favoriteRouter = express.Router();

favoriteRouter.get("/",authentication, getAllFavorite);
 

module.exports = favoriteRouter;