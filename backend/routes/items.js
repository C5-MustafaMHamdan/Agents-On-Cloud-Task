const express = require("express");

const { setNewItem ,getAllItems,getItemById} = require("../controllers/items");

const authentication = require("../middleware/authentication");

const itemRouter = express.Router();

itemRouter.post("/",authentication, setNewItem);
itemRouter.get("/", getAllItems);
itemRouter.get("/:id", getItemById);

module.exports = itemRouter;
