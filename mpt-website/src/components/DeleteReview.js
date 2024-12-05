import "../css/ReviewActions.css";
import React, { useState } from "react";

const DeleteReview = (props) => {
  const [result, setResult] = useState("");

  const deleteReview = async() => {
   const response = await fetch(`http://localhost:3000/api/reviews/${props._id}`,{
    method:"DELETE"
   });

   if(response.status === 200){
    setResult("Review successfully deleted.");
    props.hideReview();
    props.closeDialog();
   } else {
    setResult("Sorry, we couldn't delete your review at this time.");
   }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>            
              <button onClick={deleteReview}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteReview;