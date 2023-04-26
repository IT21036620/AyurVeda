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

const authenticateSeller = require('../middleware/authentication')
const upload = require('../middleware/upload')

router
  .route('/')
  .get(getAllProducts)
  .post(authenticateSeller, upload.single('image'), createProduct)
router
  .route('/:id')
  .get(getProductsByCategory)
  .patch(updateProduct)
  .delete(deleteProduct)
router.route('/productRating/:id').patch(changeProductRatingByID)
router.route('/singleProduct/:id').get(getProduct)

module.exports = router
