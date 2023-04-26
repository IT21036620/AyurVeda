const express = require('express')
const router = express.Router()

const {
  login,
  register,
  getAllProductsBySeller,
  getSellerByID,
  updateSeller,
  deleteSeller,
  changeSellerRatingByID,
} = require('../controllers/seller')

// middleware for routes
const authenticateSeller = require('../middleware/authentication')
const upload = require('../middleware/upload')

router.post('/register', upload.single('profile_image'), register)
router.post('/login', login)
router.route('/').get(authenticateSeller, getAllProductsBySeller)
router
  .route('/:id')
  .get(getSellerByID)
  .patch(upload.single('profile_image'), updateSeller)
  .delete(deleteSeller)
router.route('/sellerRating/:id').patch(changeSellerRatingByID)

module.exports = router
