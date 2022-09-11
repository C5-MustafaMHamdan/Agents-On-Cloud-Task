const express = require("express");

const { setNewItem ,getAllItems,getItemById ,updateItemById,deleteItemById} = require("../controllers/items");

const authentication = require("../middleware/authentication");

const itemRouter = express.Router();

itemRouter.post("/",authentication, setNewItem);
itemRouter.get("/", getAllItems);
itemRouter.get("/:id", getItemById);
itemRouter.put("/:id",authentication, deleteItemById);
itemRouter.put("/:id/edit",authentication, updateItemById);

module.exports = itemRouter;
