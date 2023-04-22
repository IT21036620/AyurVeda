import Review from './reviewModel.js'

export const getAllReviewsByBuyer = async (req, res) => {
  try {
    const reviews = await Review.find({ buyerId: req.params.buyerId })
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId })
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createReview = async (req, res) => {
  const { productId, buyerId, rating, review } = req.body

  try {
    const existingReview = await Review.findOne({ productId, buyerId })
    if (existingReview) {
      res
        .status(400)
        .json({ message: 'You have already reviewed this product.' })
      return
    }

    const newReview = new Review({ productId, buyerId, rating, review })
    await newReview.save()
    res.status(201).json(newReview)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateReview = async (req, res) => {
  const { rating, review } = req.body

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { rating, review },
      { new: true }
    )
    res.status(200).json(updatedReview)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.reviewId)
    res.status(200).json({ message: 'Review deleted successfully.' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
