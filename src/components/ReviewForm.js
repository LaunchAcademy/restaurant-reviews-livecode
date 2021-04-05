import React, { useState } from "react"

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    content: ""
  })

  const onSubmitHandler = (event) => {
    event.preventDefault()

    props.addReview(newReview)
  }

  const handleOnChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = (event) => {
    event.preventDefault()

    setNewReview({
      name: "",
      rating: "",
      content: ""
    })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        id="name"
        type="text"
        onChange={handleOnChange}
        value={newReview.name}
      ></input>

      <label htmlFor="rating">Rating:</label>
      <input
        name="rating"
        id="rating"
        type="text"
        onChange={handleOnChange}
        value={newReview.rating}
      ></input>

      <label htmlFor="content">Content:</label>
      <input
        name="content"
        id="content"
        type="text"
        onChange={handleOnChange}
        value={newReview.content}
      ></input>

      <input type="submit" value="Submit" />
      <button onClick={clearForm} type="button">
        Clear Form
      </button>
    </form>
  )
}

export default ReviewForm
