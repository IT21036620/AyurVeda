const Cart = require('../models/Cart')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllCartItems = asyncWrapper(async (req, res) => {
  const items = await Cart.find({}).populate('product')
  res.status(200).json({ items })
})

const createCartItem = asyncWrapper(async (req, res) => {
  const item = await Cart.create(req.body)
  res.status(201).json({ item })
})

// const getCartItemsbyid = asyncWrapper(async (req, res, next) => {
//   const { id: orderID } = req.params
//   const order = await Order.findOne({ _id: orderID })

//   if (!order) {
//     return next(createCustomError(`No Order with this id: ${orderID}`, 404))
//   }
//   res.status(200).json({ order })
// })

const updateCartItems = asyncWrapper(async (req, res) => {
  const { id: cartID } = req.params

  const item = await Cart.findOneAndUpdate({ _id: cartID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!item) {
    return next(createCustomError(`No Order with this id: ${cartID}`, 404))
  }

  res.status(200).json({ order })
})

const deleteCartItem = asyncWrapper(async (req, res) => {
  const { id: cartID } = req.params
  const item = await Cart.findOneAndDelete({ _id: cartID })
  if (!item) {
    return next(createCustomError(`No Order with this id: ${cartID}`, 404))
  }

  res.status(200).json({ item })
})

const deleteAllCartItems = asyncWrapper(async (req, res) => {
  const result = await Cart.deleteMany({})
  if (result.deletedCount === 0) {
    return next(createCustomError(`No items found to delete.`, 404))
  }

  res.status(200).json({ message: 'All cart items deleted successfully.' })
})

module.exports = {
  getAllCartItems,
  createCartItem,
  updateCartItems,
  deleteCartItem,
  deleteAllCartItems,
}
