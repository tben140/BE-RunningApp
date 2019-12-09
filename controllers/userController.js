
const { fetchUsers, postUser, patchUser } = require("../models/usersModel.js")


const getAllUsers = (req, res, next) => {
  fetchUsers().then(users => {
    res.status(200).json({ users })
  }).catch(next)
}

const addUser = (req, res, next) => {
  const newUser = req.body;
  postUser(newUser).then(user => {
    res.status(201).json({ user })
  }).catch(next)
}

const updateUser = (req, res, next) => {
  const update = req.body;
  patchUser(update).then(user => {
    res.status(200).json({ user })
  }).catch(next)
}

module.exports = { getAllUsers, addUser, updateUser };
