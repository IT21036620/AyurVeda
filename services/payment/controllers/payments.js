const Payment = require('../models/payment')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Get all Payment details
const getAllPayments = asyncWrapper( async (req,res) => {
  const payments = await Payment.find({})  
  res.status(200).json({ payments })
})

//add a new Payment
const createPayment = asyncWrapper(async (req, res) => {
  const payment = await Payment.create(req.body)
  res.status(201).json({ product })
})

// Get payment details by PaymentID
const getPayment = asyncWrapper( async (req,res, next) => {
  const {id:paymentId} = req.params;
  const payment = await Payment.findOne({_id:paymentId});

  if(!payment) {
      return res.status(404).json({msg:'no payment'})  
  }
  res.status(200).json({delivery})
})

// Payment intent creation logic
const createPaymentIntent = async (req, res) => {
  const { amount, currency, paymentMethodId } = req.body;
  
  // Create a payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method: paymentMethodId,
    confirm: true
  });

  // Return the client secret to confirm the payment on the frontend
  res.status(200).json({ clientSecret: paymentIntent.client_secret });
};


module.exports = {
  
  createPayment,
  getAllPayments,
  getPayment,
  createPaymentIntent
  
}
