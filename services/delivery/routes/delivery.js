const express = require('express')
const router = express.Router()

const {
  getAllDeliveries,
  createDelivery,
  getDelivery,
  updateDelivery,
  deleteDelivery,
} = require('../controllers/delivery')

//get all delivery and create a new delivery
router.route('/').get(getAllDeliveries).post(createDelivery)

//get, update and delete a delivery by id
router
  .route('/:id')
  .get(getDelivery)
  .patch(updateDelivery)
  .delete(deleteDelivery)

module.exports = router
