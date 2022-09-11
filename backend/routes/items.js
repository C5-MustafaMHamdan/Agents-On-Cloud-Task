const express = require("express");

const { setNewItem ,getAllItems} = require("../controllers/items");

const authentication = require("../middleware/authentication");

const itemRouter = express.Router();

itemRouter.post("/",authentication, setNewItem);
itemRouter.get("/", getAllItems);

module.exports = itemRouter;
