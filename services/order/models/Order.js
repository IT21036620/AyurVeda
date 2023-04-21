const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: [true, 'must provide a order id'],
    trim: true,
    maxlength: [20, 'id must be maximum 20 characters'],
  },
  deliveryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Delivery', // Reference to the Customer model
    required: true,
  },
  customerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Reference to the Customer model
    required: true,
  },
  cartID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart', // Reference to the Product model
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'dispatched', 'delivered'],
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

module.exports = mongoose.model('Order', OrderSchema)
