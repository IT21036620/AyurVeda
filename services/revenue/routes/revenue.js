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
} = require('../controllers/cart')

router
  .route('/')
  .get(getAllCartItems)
  .post(createCartItem)
  .delete(deleteAllCartItems)
  .post(insertcartcompletedetails)
router
  .route('/:id')
  .patch(updateCartItems)
  .delete(deleteCartItem)
  .get(getCartItemsbycusid)

module.exports = router
