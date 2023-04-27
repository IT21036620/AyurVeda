const User = require('../models/User')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const bcrypt = require('bcrypt')

const loginUser = asyncWrapper(async (req, res) => {
  const { user, pwd } = req.body
  if (!user || !pwd)
    return next(createCustomError('Username and password are required.', 400))

  const foundUser = await User.findOne({ username: user })
  if (!foundUser) return res.sendStatus(401)

  const match = await bcrypt.compare(pwd, foundUser.password)

  if (match) {
    res.json({ success: `User ${user} is logged in` })
  } else {
    res.sendStatus(401)
  }
})

const getAllUsers = asyncWrapper(async (req, res) => {
  const users = await User.find({})
  res.status(200).json({ users })
})

const createUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json({ user })
  // res.send('create delivery')
})

const getUser = asyncWrapper(async (req, res, next) => {
  const { name: userName } = req.params
  const user = await User.findOne({ username: userName })

  if (!user) {
    return next(createCustomError(`No user with id: ${userName}`, 404))
  }

  res.status(200).json({ user })

  // res.send('get delivery')
})

const updateUser = asyncWrapper(async (req, res) => {
  const { name: userName } = req.params

  const user = await User.findOneAndUpdate({ username: userName }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!user) {
    return next(createCustomError(`No user with id: ${userName}`, 404))
  }

  res.status(200).json({ user })
  // res.send('update delivery')
})

const deleteUser = asyncWrapper(async (req, res) => {
  const { name: userName } = req.params
  const user = await Delivery.findOneAndDelete({ username: userName })
  if (!user) {
    return next(createCustomError(`No user with id: ${userName}`, 404))
  }

  res.status(200).json({ user })

  // res.send('delete delivery')
})

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
}
