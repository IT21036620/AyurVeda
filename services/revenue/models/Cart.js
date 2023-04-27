const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: false,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: false,
    },
  },

  { timestamps: true }
)

module.exports = mongoose.model('Cart', CartSchema)

// Cart Complete Model
// const CartCompleteSchema = new mongoose.Schema(
//   {
//     userID: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: false,
//     },

//     products: [
//       {
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: 'Product',
//           required: true,
//         },
//         quantity: {
//           type: Number,
//           required: true,
//           default: 1,
//         },
//       },
//     ],

//     totalprice: {
//       type: Number,
//       required: false,
//     },
//   },

//   { timestamps: true }
// )

// module.exports = mongoose.model('CartComplete', CartCompleteSchema)
