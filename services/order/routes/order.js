const express = require('express')
const router = express.Router();

const {getAllOrder,
    createOrder,
    getOrderbyid,
    updateOrder,
    deleteOrder} = require('../controllers/order');

router.route('/').get(getAllOrder).post(createOrder)
router.route('/:id').get(getOrderbyid).patch(updateOrder).delete(deleteOrder)

module.exports = router