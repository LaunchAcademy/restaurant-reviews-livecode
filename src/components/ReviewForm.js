import React, { useState } from "react";

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    content: "",
  });

  const handleChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addReview(newReview)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          name="name"
          type="text"
          value={newReview.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="rating">
        Rating:
        <input
          id="rating"
          name="rating"
          type="text"
          value={newReview.rating}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="content">
        What'd'ya think:
        <input
          id="content"
          name="content"
          type="text"
          value={newReview.content}
          onChange={handleChange}
        />
      </label>

      <input type="submit" value="Add Review" />
    </form>
  );
};

export default ReviewForm;
