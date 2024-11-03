
import "../css/ContactUs.css"; 
import {useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://github.com/GMGustafson/MPT/blob/main/mpt-website/src/json/reviews.json");
            setReviews(response.data);
        })();
    },[]);

    return (
        <div id="contact-us" className="columns">
            {reviews.map(review => (
                <section id={review.id} className="one">
                    <section id={"company"}>
                        <p>Company: {review.companyName}</p>
                        <p>Review: {review.review}</p>
                        <p> Date: {review.date}</p>
                        <p>Reviewers Name: {review.reviewersName}</p>
                        <image id="img" src={review.imgSrc} alt={`${review.name}'s picture`} />
                    </section>
                </section>
            ))}
        </div>
    );
};

export default Reviews;
