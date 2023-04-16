const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      required: [true, 'must provide a paymentID']
    },
    amount: {
      type: Number,
      required: false,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'successful', 'failed'],
      required: false
    },
    cardNumber: {
      type: String,
      required: false,
      trim: true,
      maxlength: [16, 'Card Number cannot be MORE than 16 characters']
    },
    expiryDate: {
      type: Date,
      required: false,
      trim: true,
    },
    cvv: {
      type: String,
      required: false,
      trim: true,
      maxlength: [4, 'CVV cannot be MORE than 4 numbers']
    },
    // product_code: {
    //   type: String,
    //   required: [true, 'must provide product code'],
    //   trim: true,
    //   maxlength: [20, 'product code can not be more than 20 characters'],
    // },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  }
  
);

module.exports = mongoose.model('Payment', PaymentSchema)
