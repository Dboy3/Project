const express = require("express");
const router = express.Router();
const orderController = require("../API/orderApi.js");

router
  .get("/:id", orderController.getOrdersByUser)
  .post("/", orderController.insertOrder);

exports.router = router;
