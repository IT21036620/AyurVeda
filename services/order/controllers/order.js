const Order = require('../models/Order')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllOrder = asyncWrapper(async (req, res) => {
  const orders = await Order.find({})
  res.status(200).json({ orders })
})

const createOrder = asyncWrapper(async (req, res) => {
  const order = await createOrder.create(req.body)
  res.status(201).json({ order })
})

const getOrderbyid = asyncWrapper(async (req, res, next) => {
  const { id: orderID } = req.params
  const order = await Order.findOne({ _id: orderID })

  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }
  res.status(200).json({ order })
})

const getOrderbycusid = asyncWrapper(async (req, res, next) => {
  const { id: customerid } = req.params
  const cusorder = await Order.findOne({ _id: customerid })

  if (!order) {
    return next(
      createCustomError(`No Order with this Customer id: ${customerid}`, 404)
    )
  }
  res.status(200).json({ cusorder })
})

const updateOrder = asyncWrapper(async (req, res) => {
  const { id: orderID } = req.params

  const order = await Order.findOneAndUpdate({ _id: orderID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  res.status(200).json({ order })
})

const deleteOrder = asyncWrapper(async (req, res) => {
  const { id: orderID } = req.params
  const order = await Order.findOneAndDelete({ _id: orderID })
  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  res.status(200).json({ order })
})

module.exports = {
  getAllOrder,
  createOrder,
  getOrderbyid,
  getOrderbycusid,
  updateOrder,
  deleteOrder,
}
