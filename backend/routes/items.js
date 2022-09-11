const express = require("express");

const { setNewItem } = require("../controllers/items");

const authentication = require("../middleware/authentication");

const itemRouter = express.Router();

itemRouter.post("/",authentication, setNewItem);

module.exports = itemRouter;
