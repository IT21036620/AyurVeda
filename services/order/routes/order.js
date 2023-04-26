const express = require('express')
const router = express.Router()

const {
  getAllOrder,
  createOrder,
  getOrderbyid,
  updateOrder,
  deleteOrder,
  getOrdersforCustomer,
} = require('../controllers/order')

router.route('/').get(getAllOrder).post(createOrder)
router.route('/:id').get(getOrderbyid).patch(updateOrder).delete(deleteOrder)
router.route('/customers/:id').get(getOrdersforCustomer)

module.exports = router
