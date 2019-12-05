const express = require("express");
const router = express.Router();
const {
  userController,
  seedUsers
} = require("../controllers/userController.js");

const {
  seedPollutionPoints
} = require("../controllers/pollutionPointsController.js");

router.get("/", userController);

router.get("/users", seedUsers);

router.get("/pollution-points", seedPollutionPoints);

module.exports = router;
