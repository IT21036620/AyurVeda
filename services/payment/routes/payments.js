const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/payments')

// const { getAllPayments, getPayment } = require('../controllers/cart')

router.post('/', paymentController.makePayment)

// router.route('/').get(getAllPayments)
// router.route('/:id').get(getPayment)

module.exports = router
