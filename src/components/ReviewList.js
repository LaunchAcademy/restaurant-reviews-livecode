import React from "react"

import Review from "./Review"

const ReviewList = (props) => {
  // debugger
  const reviewComponents = props.reviews.map((review) => {
    // debugger
    return (
      <Review
        key={review.id}
        content={review.content}
        name={review.name}
        rating={review.rating}
      />
    )
  })
  return <div>{reviewComponents}</div>
}

export default ReviewList
