import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

const ReviewList = ({ buyerId }) => {
  const [reviews, setReviews] = useState([])
  const [editing, setEditing] = useState(null)
  const [editedReview, setEditedReview] = useState({ rating: '', review: '' })

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3020/api/v1/reviews/buyer/${buyerId}`
        )
        setReviews(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchReviews()
  }, [buyerId])

  const handleEdit = (review) => {
    setEditing(review._id)
    setEditedReview({ rating: review.rating, review: review.review })
  }

  const handleUpdateReview = async (reviewId) => {
    try {
      await axios.put(
        `http://localhost:3020/api/v1/reviews/${reviewId}`,
        editedReview
      )
      setEditing(null)
      const updatedReviews = reviews.map((review) =>
        review._id === reviewId ? { ...review, ...editedReview } : review
      )
      setReviews(updatedReviews)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg mx-20 px-20">
      <h2 className="text-xl font-bold mb-4">Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="border-b border-gray-300 mb-2 pb-2">
            {editing === review._id ? (
              <>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-2" />
                  <input
                    type="number"
                    value={editedReview.rating}
                    min="0"
                    max="10"
                    onChange={(e) =>
                      setEditedReview({
                        ...editedReview,
                        rating: e.target.value,
                      })
                    }
                    className="border rounded w-16"
                  />
                </div>
                <div className="mt-2">
                  <textarea
                    value={editedReview.review}
                    onChange={(e) =>
                      setEditedReview({
                        ...editedReview,
                        review: e.target.value,
                      })
                    }
                    className="border rounded w-full h-20"
                  ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleUpdateReview(review._id)}
                    className="bg-green-400 text-gray-600 py-1 px-4 rounded hover:bg-green-600 mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(null)}
                    className="bg-gray-400 text-gray-600 py-1 px-4 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-2" />
                  <div className="font-bold">{review.rating}/10</div>
                </div>
                <div className="text-gray-600">{review.review}</div>
                <div className="text-right">
                  <button
                    onClick={() => handleEdit(review)}
                    className="bg-blue-400 text-gray-600 py-1 px-4 rounded hover:bg-blue-600 mt-2"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-600">No reviews yet.</p>
      )}
    </div>
  )
}

export default ReviewList
