import React, { useState } from "react"

import Restaurant from "./Restaurant"
import ReviewList from "./ReviewList"

import reviews from "../constants/reviews"
import ReviewForm from "./ReviewForm"

const App = props => {
  const [reviewsData, setReviewsData] = useState(reviews)

  const addReview = (formPayload) => {
    setReviewsData([...reviewsData, formPayload])
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
            <ReviewForm addReview={addReview}/>
          
          </div>

          <div className="cell">
            <h3>Reviews</h3>

            <ReviewList reviews={reviewsData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
