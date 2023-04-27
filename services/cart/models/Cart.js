const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    // product_code: {
    //   type: String,
    //   required: [true, 'must provide product code'],
    //   trim: true,
    //   maxlength: [20, 'product code can not be more than 20 characters'],
    // },
    product_name: {
      type: String,
      required: [true, 'must provide product name'],
      trim: true,
    },
    manufacturer: {
      type: String,
      required: [true, 'must provide manufacturer name'],
      trim: true,
    },
    availability: {
      type: Boolean,
      default: false,
    },
    package_quantity: {
      type: Number,
      required: [true, 'must provide product package quantity'],
      min: [1, 'package must contain at least 1 product, got {VALUE}'],
    },
    price: {
      type: Number,
      required: [true, 'must provide product price'],
      min: [
        0,
        'product price should be more than 0, {VALUE} is not greater than 0',
      ],
    },
    mfd: {
      type: Date,
      required: [true, 'must provide mfd'],
    },
    exp: {
      type: Date,
      required: [true, 'must provide exp date'],
    },
    shipping_weight: {
      type: String,
      required: [true, 'must provide product package shipping weight'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'must provide product category'],
      trim: true,
      enum: {
        values: [
          'Supplements & Herbs',
          'Sports Nutrition',
          'Beauty',
          'Bath & Personal Care',
          'Grocery',
          'Home',
          'Medicine',
          'Pets',
          'Babies & Kids',
        ],
        message: '{VALUE} is not a valid category',
      },
    },
    description: {
      type: String,
      required: [true, 'must provide product description'],
      trim: true,
    },
    rating: {
      type: Number,
      default: 0.0,
      max: [5, 'rating cannot be higher than 5, {VALUE} is invalid'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'Seller',
      required: [true, 'Please provide seller'],
    },
    image: {
      type: String,
      required: [true, 'Please provide png or jpg product images'],
    },
    rate_count: {
      type: Number,
      default: 0,
    },
    rate_aggregate: {
      type: Number,
      default: 0.0,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema)

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      // ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
)

module.exports = mongoose.model('Cart', CartSchema)
