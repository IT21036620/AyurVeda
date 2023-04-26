import express from 'express'
import {
  getAllReviewsByBuyer,
  getAllReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
} from './reviewController.js'

const router = express.Router()

router.route('/buyer/:buyerId').get(getAllReviewsByBuyer)
router.route('/product/:productId').get(getAllReviewsByProduct)
router.route('/').post(createReview)
router.route('/:reviewId').put(updateReview).delete(deleteReview)

export default router
