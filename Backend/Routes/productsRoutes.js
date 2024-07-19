const express = require("express");
const router = express.Router();
const productController = require("../API/productApi.js");

router
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProductById)
  .get("/filter", productController.getAllProductsByFilter)
  .post("/", productController.createProducts);

exports.router = router;
