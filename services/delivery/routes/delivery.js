const express = require('express')
const router = express.Router();

const {getAllDeliveries,createDelivery,getDelivery,updateDelivery,deleteDelivery} = require('../controllers/delivery')

router.route('/').get(getAllDeliveries).post(createDelivery)
router.route('/:id').get(getDelivery).patch(updateDelivery).delete(deleteDelivery)

module.exports = router