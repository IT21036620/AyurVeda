const mongoose = require('mongoose')

const DeliverySchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: [true, 'must provide a order id'],
    trim: true,
    maxlength: [20, 'id must be maximum 20 characters'],
  },
  status: {
    type: String,
    default: 'pending',
  },
  shipping_address: {
    type: String,
    default: '105/D, Malabe, Colombo',
  },
  destination_address: {
    type: String,
    default: '',
  },
  package_weight: {
    type: Number,
  },
  delivery_date: {
    type: Date,
    default: Date.now(),
  },
  delivery_cost: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('Delivery', DeliverySchema)
