const express = require("express");
const router = express.Router();
const cartController = require("../API/cartApi");

router
  .get("/", cartController.getAllItems)
  .get("/:id", cartController.getAllItemsByUser)
  .post("/", cartController.insertIntoCart)
  .patch("/:id", cartController.updateItemById)
  .delete("/:id", cartController.deleteItemById)
  .delete("/byuser/:id", cartController.deleteItemByUserId);

exports.router = router;
