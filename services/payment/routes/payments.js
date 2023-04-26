// const express = require('express')
// const router = express.Router()

// const {createPayment,getAllPayments,getPayment,createPaymentIntent} = require('../controllers/payments')

// router.route('/').post(createPayment).get(getAllPayments).post(createPaymentIntent)
// router.route('/:id').get(getPayment)

// // router.route('/').get((req, res) => {
// //   res.send('all items')})

// module.exports = router
const express = require('express');
const Stripe = require('stripe');
require("dotenv").config();
const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
  
    res.send({url: session.url });
  });

  module.exports = router;