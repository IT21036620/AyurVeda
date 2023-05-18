const Order = require('../models/Order')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

//get all the orders
const getAllOrder = asyncWrapper(async (req, res) => {
  //get all the orders from the database
  const orders = await Order.find({})
    .populate('deliveryid', 'destination_address') // populate the reference schemas for delivery
    .populate('customerid', 'buyerName') // populate the reference schemas for buyer
  res.status(200).json({ orders })
})

//create a new order
const createOrder = asyncWrapper(async (req, res) => {
  //create a new order
  const order = await Order.create(req.body)
  res.status(201).json({ order })
})

//get order by id
const getOrderbyid = asyncWrapper(async (req, res, next) => {
  //get the order by id
  const { id: orderID } = req.params
  const order = await Order.findOne({ _id: orderID })
    .populate('deliveryid', 'destination_address') // populate the reference schemas for delivery
    .populate('customerid', 'buyerName') // populate the reference schemas for customer
    .populate('cartID', '_id') // populate the reference schemas for cart

  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  //send the order
  res.status(200).json({ order })
})

//get order by a customer id
const getOrdersforCustomer = asyncWrapper(async (req, res, next) => {
  const { id: custID } = req.params
  const orders = await Order.find({ customerid: custID }).populate(
    'customerid',
    'buyerName'
  ) // populate the customer schema

  if (!orders) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  //send the order
  res.status(200).json({ orders })
})

//update a order
const updateOrder = asyncWrapper(async (req, res) => {
  //get the order id from the request
  const { id: orderID } = req.params

  //update the order record with new data
  const order = await Order.findOneAndUpdate({ _id: orderID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  //send the order
  res.status(200).json({ order })
})

//delete a order
const deleteOrder = asyncWrapper(async (req, res) => {
  //get the order id from the request
  const { id: orderID } = req.params

  //find the order from the database and delete it
  const order = await Order.findOneAndDelete({ _id: orderID })
  if (!order) {
    return next(createCustomError(`No Order with this id: ${orderID}`, 404))
  }

  //send the response
  res.status(200).json({ order })
})

module.exports = {
  getAllOrder,
  createOrder,
  getOrderbyid,
  updateOrder,
  deleteOrder,
  getOrdersforCustomer,
}
