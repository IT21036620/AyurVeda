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

const Delivery = mongoose.model('Delivery', DeliverySchema)

const buyerSchema = mongoose.Schema(
  {
    buyerName: {
      type: String,
      required: true,
      unique: true,
    },
    credentialId: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

const buyer = mongoose.model('buyer', buyerSchema)

const CartCompleteSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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

const OrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: [true, 'must provide a order id'],
    trim: true,
    maxlength: [25, 'id must be maximum 20 characters'],
  },
  deliveryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Delivery', // Reference to the Customer model
    // required: true,
  },
  customerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'buyer', // Reference to the Customer model
    // required: true,
  },
  cartID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CartComplete', // Reference to the Product model
    // required: true,
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
