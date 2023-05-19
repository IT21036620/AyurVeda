import express from 'express'
import {
  getAllReviewsByBuyer,
  getAllReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
} from './reviewController.js'

//middleware for authorization
import verifyJWT from './middleware/verifyJWT.js'
import rolesVerify from './middleware/rolesVerify.js'

//role specification for role authorization
const role = 'admin'

const router = express.Router()

router.route('/buyer/:buyerId').get(getAllReviewsByBuyer)
router.route('/product/:productId').get(getAllReviewsByProduct)
router.route('/').post(createReview)
router.route('/:reviewId').put(updateReview).delete(deleteReview)

export default router
