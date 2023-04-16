const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      required: [true, 'must provide a paymentID']
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'successful', 'failed'],
      required: true
    },
    cardNumber: {
      type: String,
      required: true,
      trim: true,
      maxlength: [16, 'Card Number cannot be MORE than 16 characters']
    },
    expiryDate: {
      type: Date,
      required: true,
      trim: true,
    },
    cvv: {
      type: String,
      required: true,
      trim: true,
      maxlength: [4, 'CVV cannot be MORE than 4 numbers']
    },
    
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  }
  
);

module.exports = mongoose.model('Payment', PaymentSchema)
