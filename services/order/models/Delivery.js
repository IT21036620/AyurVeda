const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: [true, 'must provide a order id'],
        trim: true,
        maxlength: [20, 'id must be maximum 20 characters']
    },
    status: {
        type: String,
        default: "pending"

    },
    shipping_address: {
        address_line1: String,
        address_line2: String,
        city: String,
        postal_code: String,
        country: String,
        
      },
      destination_address: {
        address_line1: String,
        address_line2: String,
        city: String,
        postal_code: String,
        country: String,
        
      },
      package_weight: {
        type: Number
      },
      delivery_date: {
        type: Date,
        default: Date.now()
      },
      delivery_cost: {
        type: Number,
        default: 0
      }


})

module.exports = mongoose.model('Delivery', DeliverySchema)