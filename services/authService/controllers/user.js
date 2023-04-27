const User = require('../models/User')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//log out user
const logOut = asyncWrapper(async (req, res) => {
  const cookies = req.cookies
  console.log(cookies.jwt)
  if (!cookies?.jwt) return res.sendStatus(401)

  const refreshtoken = cookies.jwt

  console.log(refreshtoken)
  const foundUser = await User.findOne({ refreshToken: refreshtoken })
  console.log(foundUser.username)
  if (!foundUser) {
    res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
    return res.sendStatus(204)
  }

  //delete refresh token
  foundUser.refreshToken = ''
  const result = await foundUser.save()

  res.clearCookie('jwt', {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  })
  res.sendStatus(204)
})

//access token grant with refresh token
const refreshTokenHandle = asyncWrapper(async (req, res) => {
  const cookies = req.cookies
  console.log(cookies.jwt)
  if (!cookies?.jwt) return res.sendStatus(401)

  const refreshtoken = cookies.jwt
  console.log(refreshtoken)
  const foundUser = await User.findOne({ refreshToken: refreshtoken })
  console.log(foundUser.username)
  if (!foundUser) return res.sendStatus(403)

  //jwt evaluation
  jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.sendStatus(403)
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: decoded.username,
          role: foundUser.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    )
    res.json({ accessToken })
  })
})

//login user
const loginUser = asyncWrapper(async (req, res) => {
  const { user, pwd } = req.body
  if (!user || !pwd)
    return next(createCustomError('Username and password are required.', 400))

  const foundUser = await User.findOne({ username: user })
  if (!foundUser) return res.sendStatus(401)

  //password comparison
  const match = await bcrypt.compare(pwd, foundUser.password)

  if (match) {
    // create JWTs
    const role = foundUser.role
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          role: role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    )
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    )

    //saving refresh Token
    foundUser.refreshToken = refreshToken
    const result = await foundUser.save()

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    res.json({ accessToken, role })
  } else {
    res.sendStatus(401)
  }
})

//access token grant with refresh token
// const refreshTokenHandle = asyncWrapper(async (req, res) => {
//   res.json({ msg: 'badu wada' })
// const cookies = req.cookies
// console.log(cookies)
// if (!cookies?.jwt) return res.sendStatus(401)

// const refreshToken = cookies.jwt
// console.log(refreshToken)
// const foundUser = User.findOne({ refreshToken: refreshToken })
// console.log(foundUser.username)
// if (!foundUser) return res.sendStatus(403)

// //jwt evaluation
// jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//   if (err || foundUser.username !== decoded.username)
//     return res.sendStatus(403)
//   const accessToken = jwt.sign(
//     { username: decoded.username },
//     process.env.ACCESS_TOKEN_SECRET,
//     { expiresIn: '1d' }
//   )
//   res.json({ accessToken })
// })
// })

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
  refreshTokenHandle,
  logOut,
}
