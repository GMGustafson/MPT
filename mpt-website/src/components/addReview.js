import "../css/ReviewActions.css"; 
import React, { useState } from "react";

const AddReview = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(...formData);

    console.log(inputs.img); 
    console.log(inputs._id); 
    console.log(inputs.companyName); 
    console.log(inputs.date); 
  
    const response = await fetch("http://localhost:3003/api/reviews", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      console.log("Success:", formData);
      setResult("Review successfully added!");
      props.showNewReview(await response.json());
      event.target.reset();
      props.closeDialog();
    } else {
      console.log("error");
      setResult("Error adding Review, we are sorry");
    }
  };

  return (
    <div id="add-dialog" className="w3-modal">
      
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright">
            &times;
          </span>
          <form id="add-review-form" onSubmit={addToServer} method="POST"> 
            <p>
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={inputs.companyName || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="review">Review:</label>
              <input
                type="text"
                id="review"
                name="review"
                required
                value={inputs.review || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="reviewersName">Reviewer's Name:</label>
              <input
                type="text"
                id="reviewersName"
                name="reviewersName"
                required
                value={inputs.reviewersName || ""}
                onChange={handleChange}
              />
            </p>
            <p>
              <label htmlFor="date">Date of Review:</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={inputs.date || ""}
                onChange={handleChange}
              />
            </p>
            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  alt=""
                  src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
