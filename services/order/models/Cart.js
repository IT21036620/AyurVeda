const mongoose = require('mongoose');

// CartItem Schema
const CartItemSchema = new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });
  
  // Cart Schema
  const CartSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    items: [CartItemSchema],
    totalQuantity: {
      type: Number,
      default: 0
    },
    totalPrice: {
      type: Number,
      default: 0
    }
  });
  
  // Cart Model
  const Cart = mongoose.model('Cart', CartSchema);
  
  module.exports = Cart;