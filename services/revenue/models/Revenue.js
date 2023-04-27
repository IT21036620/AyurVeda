const mongoose = require('mongoose')

const RevenueSchema = new mongoose.Schema({
  revenue: {
    type: Number,
    required: true,
  },
  sellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    required: true,
  },

  productSales: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  orderIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
  ],
})

const Revenue = mongoose.model('Revenue', RevenueSchema)
