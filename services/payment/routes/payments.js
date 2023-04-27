// const express = require('express')
// const router = express.Router()

// const {createPayment,getAllPayments,getPayment,createPaymentIntent} = require('../controllers/payments')

// router.route('/').post(createPayment).get(getAllPayments).post(createPaymentIntent)
// router.route('/:id').get(getPayment)

// // router.route('/').get((req, res) => {
// //   res.send('all items')})

// module.exports = router
// const express = require('express');
// const Stripe = require('stripe');
// require("dotenv").config();
// const stripe = Stripe(process.env.STRIPE_KEY)

// const router = express.Router();

// router.post('/create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${process.env.CLIENT_URL}/checkout-success`,
//       cancel_url: `${process.env.CLIENT_URL}/cart`,
//     });

//     res.send({url: session.url });
//   });

//   module.exports = router;

// const express = require('express')
// const router = express.Router()
// const md5 = require('crypto-js/md5')

// router.post('/pay', async (req, res) => {
//   const merchantSecret = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
//   const merchantId = '1222625'
//   const orderId = '01'
//   const amount = 1000
//   const hashedSecret = md5(merchantSecret).toString().toUpperCase()
//   const amountFormated = parseFloat(amount)
//     .toLocaleString('en-us', { minimumFractionDigits: 2 })
//     .replaceAll(',', '')
//   const currency = 'LKR'
//   const hash = md5(
//     merchantId + orderId + amountFormated + currency + hashedSecret
//   )
//     .toString()
//     .toUpperCase()

//   const payment = new Payhere.Payment({
//     sandbox: true, // Set this to false in production
//     merchantId: '1222625',
//     returnUrl: 'http://localhost:3000/payment-success',
//     cancelUrl: 'http://localhost:3000/payment-cancelled',
//     order_id: '01',
//     items: 'test',
//     amount: 1000, // Amount in LKR
//     currency: 'LKR',
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@example.com',
//     phone: '+94771234567',
//     address: '123 Main St',
//     city: 'Colombo',
//     country: 'Sri Lanka',
//     hash: hash,
//   })

//   const paymentUrl = await payment.create()
//   res.redirect(paymentUrl)
// })

// module.exports = router

// const express = require('express')
// const axios = require('axios')
// const router = express.Router()

// router.post('/initiate', async (req, res) => {
//   try {
//     const { amount, name, email, phone } = req.body
//     const data = {
//       merchant_id: '1222625',
//       return_url: 'http://localhost:3000/payment/confirm',
//       cancel_url: 'http://localhost:3000/payment/cancel',
//       notify_url: 'http://localhost:3000/payment/notify',
//       order_id: '01',
//       items: 'Test Item',
//       amount: 1000,
//       currency: 'LKR',
//       first_name: name,
//       email: email,
//       phone: phone,
//       address: 'Test Address',
//       city: 'Test City',
//       country: 'Sri Lanka',
//     }
//     const response = await axios.post(
//       'https://sandbox.payhere.lk/pay/checkout',
//       data
//     )
//     // Redirect the user to the Payhere payment page
//     res.redirect(response.data)
//   } catch (error) {
//     console.error(error)
//     res.sendStatus(500)
//   }
// })

// module.exports = router

const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/payments')

// const { getAllPayments, getPayment } = require('../controllers/cart')

router.post('/', paymentController.makePayment)

// router.route('/').get(getAllPayments)
// router.route('/:id').get(getPayment)

module.exports = router
