
import "../css/Reviews.css"; 
import {useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./addReview";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://mpt-backend-m8r7.onrender.com/api/reviews");
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
        setReviews((Review) => [...reviews, Review]);
      };
    

    return (
        <div id="background"> 
            <h1 id="page-heading">Reviews</h1>

            <button id="add-review"onClick={openAddDialog}> Add Review</button>
            
            {showAddDialog ? (
                <AddReview closeDialog={closeAddDialog} showNewReview={updateReviews}/> ):("")}
      
            <div className="reviews-grid" >
                {reviews.map((review) => (
                    <section id="company" >
                        <p id="company-name">{review.companyName}</p>
                       <p>{review.review}</p>
                       <p>Reviewed By: {review.reviewersName} on {review.date}</p>
                        <img id="images" src={"https://mpt-backend-m8r7.onrender.com/images/" + review.image} alt={`${review.name}'s picture`} />
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Reviews;

