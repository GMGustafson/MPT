
import "../css/Reviews.css"; 
import {useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./addReview";
import Review from "./Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("http://localhost:3003/api/reviews");
            console.log(response.data);
            setReviews(response.data);
        })();
    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
      };
    
      const closeAddDialog = () => {
        setShowAddDialog(false);
      };

      const updateReviews= (Review) => {
        console.log("In update review " + Review.companyName);
        setReviews((reviews) => [...reviews, Review]);
      };
    

    return (
        <div id="background"> 
            <h1 id="page-heading">Reviews</h1>

            <button id="add-review"onClick={openAddDialog}> Add Review</button>
            
            {showAddDialog ? (
                <AddReview closeDialog={closeAddDialog} showNewReview={updateReviews}/> ):("")}
      
            <div className="reviews-grid" >
                {reviews.map((review) => (
                    <Review 
                        companyName = {review.companyName}
                        _id = {review._id}
                        review = {review.review} 
                        reviewersName = {review.reviewersName}
                        date = {review.date}
                        img = {review.img}
                        /> 
                     ))}
      </div>
    </div>
  );
};
export default Reviews;

