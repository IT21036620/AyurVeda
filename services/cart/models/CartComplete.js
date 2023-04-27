const mongoose = require('mongoose')

const CartCompleteSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      // ref: 'User',
      required: true,
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],

    totalprice: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
)

module.exports = mongoose.model('CartComplete', CartCompleteSchema)
