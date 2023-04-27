const express = require('express')
const router = express.Router()

const {
  getAllCartItems,
  createCartItem,
  updateCartItems,
  deleteCartItem,
  deleteAllCartItems,
  getCartItemsbycusid,
  insertcartcompletedetails,
  generateCommission,
} = require('../controllers/cart')

router
  .route('/')
  .get(getAllCartItems) // GET all cart items
  .get(getCartItemsbycusid) // GET all cart items by Customer id
  .post(createCartItem) // Add new iteam to cart
  .delete(deleteAllCartItems) // Delete all cart items
  .post(insertcartcompletedetails) // insert temporary cart items to permanent record
  .post(generateCommission) // Generate Commission
router
  .route('/:id')
  .patch(updateCartItems) // Update cart items
  .delete(deleteCartItem) // Delete single cart items
  .get(getCartItemsbycusid) // Get all cart items by Customer id

module.exports = router
