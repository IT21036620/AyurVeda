const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
  chargeId: {
    type: String,
    required: [true, 'must provide a paymentID'],
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
  },
  currency: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('Payment', PaymentSchema)
