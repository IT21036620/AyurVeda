const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  customerid: {
    type: String,
    ref: 'Customer', // Reference to the Customer model
    required: true,
  },
  products: [
    {
      type: String,
      ref: 'Product', // Reference to the Product model
    },
  ],
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed'],
    default: 'pending',
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
