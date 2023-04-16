const Payment = require('../models/payment')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

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


module.exports = {
  
  createPayment,
  getAllPayments,
  getPayment
  
}
