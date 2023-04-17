const express = require('express')
const router = express.Router()

const {createPayment,getAllPayments,getPayment,createPaymentIntent} = require('../controllers/payments')

router.route('/').post(createPayment).get(getAllPayments).post(createPaymentIntent)
router.route('/:id').get(getPayment)

// router.route('/').get((req, res) => {
//   res.send('all items')})

module.exports = router
