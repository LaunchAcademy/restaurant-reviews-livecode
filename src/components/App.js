import React, { useState } from "react"

import Restaurant from "./Restaurant"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

import reviewsCollection from "../constants/reviews"

const App = (props) => {
  const [reviews, setReviews] = useState(reviewsCollection)
  
  const addReview = (formPayload) => {
    // modify formPayload to add an id
    
    let lastReview = reviews[reviews.length - 1]
    let lastReviewId = lastReview.id
    let newReviewId = lastReviewId + 1
    // let newReviewId = reviews.length + 1
    
    let updatedFormPayload = {
      ...formPayload,
      id: newReviewId
    }
    
    setReviews([
      ...reviews,
      updatedFormPayload
    ])
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant />
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>
            <ReviewForm 
              addReview={addReview}
            />

          </div>

          <div className="cell">
            <h3>Reviews</h3>
            <ReviewList 
              reviewsData={reviews}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
