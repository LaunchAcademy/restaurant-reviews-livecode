import React, { useState } from "react"

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    content: ""
  })

  const handleChange = (event) => {
    // event.preventDefault()
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addReview(newReview)
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="name">Your Name:</label>
      <input 
        id="name" 
        name="name" 
        type="text"
        value={newReview.name}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="rating">Rating:</label>
      <input 
        id="rating" 
        name="rating" 
        type="number"
        value={newReview.rating}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="content">Your Review:</label>
      <input 
        id="content" 
        name="content" 
        type="text" 
        value={newReview.content}
        onChange={handleChange}
      />
      <br />

      <input type="submit" value="Add Your Review" />
    </form>
  )
}

export default ReviewForm