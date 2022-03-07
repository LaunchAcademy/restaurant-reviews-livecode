import React from "react";

import Review from "./Review";

const ReviewList = (props) => {
  // debugger;
  
  const reviewComponents = props.reviews.map( (review) => {
    return (
      <Review 
        key={review.id}
        name={review.name}
        rating={review.rating}
        content={review.content}
      />
    )
  })

  return (
    <div>{reviewComponents}</div>
  )
};

export default ReviewList;
