const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const rolesVerify = require('../middleware/rolesVerify')

const role = 'admin'

const {
  getAllOrder,
  createOrder,
  getOrderbyid,
  updateOrder,
  deleteOrder,
  getOrdersforCustomer,
} = require('../controllers/order')

router
  .route('/')
  .get(verifyJWT, rolesVerify(role), getAllOrder)
  .post(createOrder)
router.route('/:id').get(getOrderbyid).patch(updateOrder).delete(deleteOrder)
router.route('/customers/:id').get(getOrdersforCustomer)

module.exports = router
