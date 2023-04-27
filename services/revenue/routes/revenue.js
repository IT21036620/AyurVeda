const express = require('express')
const router = express.Router()

const { calculateRevenue } = require('../controllers/revenue')

router.route('/').post(calculateRevenue)

module.exports = router
