const express = require('express')
const router = express.Router()

//middleware for authorization
const verifyJWT = require('../middleware/verifyJWT')
const rolesVerify = require('../middleware/rolesVerify')

//role specification for role authorization
const role = 'admin'

const {
  getAllOrder,
  createOrder,
  getOrderbyid,
  updateOrder,
  deleteOrder,
  getOrdersforCustomer,
} = require('../controllers/order')

//routes protected with jwt authorization
router
  .route('/')
  .get(verifyJWT, rolesVerify(role), getAllOrder)
  .post(createOrder)
router.route('/:id').get(getOrderbyid).patch(updateOrder).delete(deleteOrder)
router.route('/customers/:id').get(getOrdersforCustomer)

module.exports = router
