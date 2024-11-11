import "../css/Reviews.css"; 

const review = (Review) => {
    return (
    <section id="company" className="one">
        
        <p id="company-name">{review.companyName}</p>
        <p>{review.review}</p>
        <p>Reviewed By: {review.reviewersName} on {review.date}</p>
        <img id="images" src={"http://localhost:3003/images/" + review.image} alt={`${review.name}'s picture`} />
    </section>
    );
};

export default Review;