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

router.route('/').get(getAllProducts).post(createProduct)
router
  .route('/:id')
  .get(getProductsByCategory)
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)
// router.route('/search').get(getAllProductsSorted)

module.exports = router
