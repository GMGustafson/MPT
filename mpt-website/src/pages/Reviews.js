
import "../css/Reviews.css"; 
import {useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("http://localhost:3002/api/reviews");
            setReviews(response.data);
        })();
    },[]);

    return (
        <div id="background"> 
            <h1 id="page-heading">Reviews</h1>
            <div id="contact-us" className="columns">
                {reviews.map(review => (
                    <section id={review.id} className="one">
                        <section id="company">
                            <p id="company-name">{review.companyName}</p>
                            <p>{review.review}</p>
                            <p>Reviewed By: {review.reviewersName} on {review.date}</p>
                            <img id="images" src={review.image} alt={`${review.name}'s picture`} />
                        </section>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
