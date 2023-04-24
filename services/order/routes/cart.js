const express = require('express')
const router = express.Router()

const {
  getAllCartItems,
  createCartItem,
  updateCartItems,
  deleteCartItem,
  deleteAllCartItems,
} = require('../controllers/cart')

router
  .route('/')
  .get(getAllCartItems)
  .post(createCartItem)
  .delete(deleteAllCartItems)
router.route('/:id').patch(updateCartItems).delete(deleteCartItem)

module.exports = router
