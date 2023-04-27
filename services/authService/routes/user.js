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
router.route('/login').post(loginUser)
router.route('/refresh').get(refreshTokenHandle)
router.route('/logout').get(logOut)

module.exports = router
