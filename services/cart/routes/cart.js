const express = require('express')
const router = express.Router()
// const verifyJWT = require('../middleware/verifyJWT')
// const rolesVerify = require('../middleware/rolesVerify')

// const role = 'buyer'

const {
  getAllCartItems,
  createCartItem,
  updateCartItems,
  deleteCartItem,
  deleteAllCartItems,
  getCartItemsbycusid,
  insertcartcompletedetails,
  generateCommission,
  getCompelteCartItemsbycartid,
} = require('../controllers/cart')

router
  .route('/')
  .get(getAllCartItems) // GET all cart items
  .get(getCartItemsbycusid) // GET all cart items by Customer id
  .post(createCartItem) // Add new iteam to cart
  .delete(deleteAllCartItems) // Delete all cart items

router
  .route('/:id')
  .patch(updateCartItems) // Update cart items
  .delete(deleteCartItem) // Delete single cart items
  .get(getCartItemsbycusid) // Get all cart items by Customer id

router.route('/commission').post(generateCommission) // Generate Commission
router.route('/cartcomplete').post(insertcartcompletedetails) //insert temporary cart items to permanent record
router.route('/cartcomplete/:id').get(getCompelteCartItemsbycartid) //Get Complete cart by cart ID

module.exports = router
