import "../css/Add.css";
import React, { useState } from "react";

const AddHousePlan = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright">
            &times;
          </span>
          <form id="add-review-form">
            <p>
              <label htmlFor="companyName"> Company Name:</label>
              <input type="text" id="CompanyName" name="CompanyName" required value={inputs.name || ""} />
            </p>
            <p>
              <label htmlFor="review"> Review: </label>
              <input type="text" id="Review" name="Review" required value={inputs.name || ""} />
            </p>
            <p>
              <label htmlFor="reviewersName"> Reviewers Name:</label>
              <input type="text" id="reviewersName" name="reviewersName" required value={inputs.name || ""} />
            </p>
            <p>
              <label htmlFor="date"> Date of Review: </label>
              <input type="text" id="date" name="date" required value={inputs.name || ""}  />
            </p>
            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" />
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHousePlan;