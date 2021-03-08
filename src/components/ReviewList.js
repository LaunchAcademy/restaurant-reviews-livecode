import React from 'react'

import Review from "./Review"

const ReviewList = (props) => {
  // debugger
  const reviewTiles = props.reviewsData.map((review) => {
    return (
      <Review
        key={review.id}
        name={review.name}
        rating={review.rating}
        content={review.content}
      />
    )
  })

  return(
    <div>
      {reviewTiles}
    </div>
  )
}

export default ReviewList
