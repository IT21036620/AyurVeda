const express = require('express')
const router = express.Router()

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  refreshTokenHandle,
  logOut,
} = require('../controllers/user')

router.route('/').get(getAllUsers).post(createUser)
// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

//login user
router.route('/login').post(loginUser)

//access Token grant
router.route('/refresh').get(refreshTokenHandle)

//log out user
router.route('/logout').get(logOut)

module.exports = router
