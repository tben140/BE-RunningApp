const express = require("express");
const router = express.Router();
const {
  userController,
  seedUsers
} = require("../controllers/userController.js");

router.get("/", userController);

router.get("/users", seedUsers);

module.exports = router;
