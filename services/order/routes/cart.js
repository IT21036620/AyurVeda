const express = require('express')
const router = express.Router()

const {
  getAllCartItems,
  createCartItem,
  updateCartItems,
  deleteCartItem,
} = require('../controllers/cart')

router.route('/').get(getAllCartItems).post(createCartItem)
router.route('/:id').patch(updateCartItems).delete(deleteCartItem)

module.exports = router
