const mongoose = require('mongoose');

// CartItem Schema
// const CartItemSchema = new mongoose.Schema({
//     product: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Product',
//       required: true
//     },
//     quantity: {
//       type: Number,
//       required: true
//     },
//     price: {
//       type: Number,
//       required: true
//     }
//   });
  
  // Cart Schema
  const CartSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User'
  //   },
  //   items: [CartItemSchema],
  //   totalQuantity: {
  //     type: Number,
  //     default: 0
  //   },
  //   totalPrice: {
  //     type: Number,
  //     default: 0
  //   }
  // });
  
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  cartItems: [
        {
            product: { 
              type: mongoose.Schema.Types.ObjectId, 
              ref: 'Product', 
              required: true 
            },
            quantity: { 
              type: Number, 
              default: 1 
            },
            price: {
              type: Number, 
              required: true
            }
        }
    ]
}, { timestamps: true });

  
  // Cart Model
  module.exports = mongoose.model('Cart', CartSchema);