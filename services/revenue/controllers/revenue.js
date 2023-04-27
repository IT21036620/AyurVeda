const Cart = require('../models/Cart')
const CartComplete = require('../models/CartComplete')
const Revenue = require('../models/Revenue')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const calculateRevenue = asyncWrapper(async (req, res) => {
  const orders = await Cart.find().populate('items.product', 'price seller')
  const sellerMap = new Map()

  orders.forEach((order) => {
    order.items.forEach((item) => {
      const sellerId = item.product.seller
      const totalPrice = item.quantity * item.product.price
      const currentRevenue = sellerMap.get(sellerId) || 0
      sellerMap.set(sellerId, currentRevenue + totalPrice)
    })
  })

  for (let [sellerId, revenue] of sellerMap.entries()) {
    const seller = await Seller.findById(sellerId)
    const newRevenue = new Revenue({
      seller: seller,
      totalRevenue: revenue,
    })
    await newRevenue.save()
  }

  res.status(200).json({ message: 'Revenue calculated successfully' })
})

module.exports = {
  calculateRevenue,
}
