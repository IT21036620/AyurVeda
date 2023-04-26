const Order = require('../models/Order')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllOrder = asyncWrapper(async (req, res) => {
  const orders = await Order.find({})
  res.status(200).json({ orders })
})

const createOrder = asyncWrapper(async (req, res) => {
  const order = await Order.create(req.body)
  res.status(201).json({ order })
  // res.send('create delivery')
})

const getOrderbyid = asyncWrapper(async (req, res, next) => {
  const { id: orderID } = req.params
  const order = await Order.findOne({ _id: orderID }).populate(
    'deliveryid',
    'order_id'
  )

  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  res.status(200).json({ order })

  // res.send('get delivery')
})

const getOrdersforCustomer = asyncWrapper(async (req, res, next) => {
  const { id: custID } = req.params
  const orders = await Order.find({ customerid: custID }).populate(
    'customerid',
    'buyerName'
  )

  if (!orders) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  res.status(200).json({ orders })
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
  // res.send('update delivery')
})

const deleteOrder = asyncWrapper(async (req, res) => {
  const { id: orderID } = req.params
  const order = await Order.findOneAndDelete({ _id: orderID })
  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  res.status(200).json({ order })

  // res.send('delete delivery')
})

module.exports = {
  getAllOrder,
  createOrder,
  getOrderbyid,
  updateOrder,
  deleteOrder,
  getOrdersforCustomer,
}
