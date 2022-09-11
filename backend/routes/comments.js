const express =require("express");

const {createNewComment} =require("../controllers/comments")

const authentication = require("../middleware/authentication");

const commentRouter = express.Router();

commentRouter.post("/:id",authentication, createNewComment);
 

module.exports = commentRouter;