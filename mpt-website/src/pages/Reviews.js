import React, { useEffect, useState } from 'react';

const Reviews = () => {
  // State to hold the reviews data
  const [reviews, setReviews] = useState([]);

  // Fetch reviews data from the API
  const getReviews = async () => {
    const review = "./json/reviews.json";

  return (
    <div>
      <h1>Reviews Page</h1>
      <div id="reviews-section">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <p>Loading reviews...</p>
        )}
      </div>
    </div>
  );
};

// Separate component for individual review sections
const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3>{review.companyName}</h3>
      <p>{review.review}</p>
      <p>Reviewed by: {review.reviewersName} on {review.date}</p>
      <img src={review.image} alt={review.companyName} />
    </div>
  );
};

export default Reviews;
