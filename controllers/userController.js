const { usersData } = require("../db/data/development-data/index.js");
const { UserModel } = require("../models/mongooseUserModel.js");

const userController = (req, res) => {
  console.log("Inside User Controller ...");
};

const seedUsers = (req, res) => {
  console.log("USERSDATA ->", usersData);
  usersData.forEach(user => {
    const newUser = new UserModel(user);
    newUser.save();
  });

  res.send("Seeded Users");
};

module.exports = { userController, seedUsers };
