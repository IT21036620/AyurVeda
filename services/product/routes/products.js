const express = require('express')
const router = express.Router()

const {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/products')

const authenticateSeller = require('../middleware/authentication')

router.route('/').get(getAllProducts).post(authenticateSeller, createProduct)
router
  .route('/:id')
  .get(getProductsByCategory)
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)
// router.route('/search').get(getAllProductsSorted)

module.exports = router
