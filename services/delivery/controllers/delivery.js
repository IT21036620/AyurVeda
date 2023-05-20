const Delivery = require('../models/Delivery')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

//get all the deliveries
const getAllDeliveries = asyncWrapper(async (req, res) => {
  //get all the delivery record from the Database
  const deliveries = await Delivery.find({})
  res.status(200).json({ deliveries }) // send the results
})

//create a new delivery record
const createDelivery = asyncWrapper(async (req, res) => {
  //create a new delivery record
  const delivery = await Delivery.create(req.body)
  res.status(201).json({ delivery }) // send the result
})

//get a specific delivery record
const getDelivery = asyncWrapper(async (req, res, next) => {
  //get the delivery id from the request
  const { id: deliveryID } = req.params

  //search for any matching delivery record
  const delivery = await Delivery.findOne({ _id: deliveryID })

  if (!delivery) {
    //send error if not found
    return next(createCustomError(`No delivery with id: ${deliveryID}`, 404))
  }

  //send a result if found
  res.status(200).json({ delivery })
})

//update a specific delivery record
const updateDelivery = asyncWrapper(async (req, res) => {
  //get the delivery id from the request
  const { id: deliveryID } = req.params

  //get the new data and update the delivery record
  const delivery = await Delivery.findOneAndUpdate(
    { _id: deliveryID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )

  if (!delivery) {
    //send error if not successful
    return next(createCustomError(`No delivery with id: ${deliveryID}`, 404))
  }

  //send the updated result
  res.status(200).json({ delivery })
})

//delete a specific delivery record
const deleteDelivery = asyncWrapper(async (req, res) => {
  //get the delivery id from the request
  const { id: deliveryID } = req.params

  //find the delivery record from Database and delete
  const delivery = await Delivery.findOneAndDelete({ _id: deliveryID })
  if (!delivery) {
    //send error if not successful
    return next(createCustomError(`No delivery with id: ${deliveryID}`, 404))
  }

  //send deleted record
  res.status(200).json({ delivery })
})

module.exports = {
  getAllDeliveries,
  createDelivery,
  getDelivery,
  updateDelivery,
  deleteDelivery,
}
