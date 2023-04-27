const express = require('express')
const router = express.Router()

const { calculateRevenue } = require('../controllers/revenue')

router
  .route('/')

  .post(calculateRevenue)

router.route('/:id')

module.exports = router
