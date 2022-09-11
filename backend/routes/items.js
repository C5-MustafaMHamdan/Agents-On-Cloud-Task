const express = require("express");

const { setNewItem ,getAllItems,getItemById ,deleteItemById} = require("../controllers/items");

const authentication = require("../middleware/authentication");

const itemRouter = express.Router();

itemRouter.post("/",authentication, setNewItem);
itemRouter.get("/", getAllItems);
itemRouter.get("/:id", getItemById);
itemRouter.put("/:id",authentication, deleteItemById);

module.exports = itemRouter;
