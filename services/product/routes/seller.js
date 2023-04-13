const express = require('express')
const router = express.Router()

const {
  login,
  register,
  getAllProductsBySeller,
} = require('../controllers/seller')

const authenticateSeller = require('../middleware/authentication')

router.post('/register', register)
router.post('/login', login)
router.route('/').get(authenticateSeller, getAllProductsBySeller)

module.exports = router
