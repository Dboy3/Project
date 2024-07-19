const express = require("express");
const router = express.Router();
const userController = require("../API/userApi");

router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUserById)
  .patch("/:id", userController.updateUserAddress);

exports.router = router;
