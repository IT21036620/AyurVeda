const mongoose = require('mongoose')

const CartCompleteSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: false,
        },
        quantity: {
          type: Number,
          required: false,
          default: 1,
        },
      },
    ],

    totalprice: {
      type: Number,
      required: false,
    },
  },

  { timestamps: true }
)

module.exports = mongoose.model('CartComplete', CartCompleteSchema)
