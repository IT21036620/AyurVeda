const express = require('express')
const router = express.Router()

const {
  login,
  register,
  getAllProductsBySeller,
  updateSeller,
  deleteSeller,
} = require('../controllers/seller')

const authenticateSeller = require('../middleware/authentication')
const upload = require('../middleware/upload')

router.post('/register', upload.single('profile_image'), register)
router.post('/login', login)
router.route('/').get(authenticateSeller, getAllProductsBySeller)
router.route('/:id').patch(updateSeller).delete(deleteSeller)

module.exports = router
