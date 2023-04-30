const express = require('express')
const router = express.Router()

const {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  changeProductRatingByID,
} = require('../controllers/products')

// middleware for routes
const authenticateSeller = require('../middleware/authentication')
// const upload = require('../middleware/upload')
const upload = require('../middleware/cloudinary')

router
  .route('/')
  .get(getAllProducts)
  .post(authenticateSeller, upload.single('image'), createProduct)
router
  .route('/:id')
  .get(getProductsByCategory)
  .patch(upload.single('image'), updateProduct)
  .delete(deleteProduct)
router.route('/productRating/:id').patch(changeProductRatingByID)
router.route('/singleProduct/:id').get(getProduct)

module.exports = router
