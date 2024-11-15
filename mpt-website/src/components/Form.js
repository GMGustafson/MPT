import "../css/Form.css"; 
import {useState, useEffect } from "react";

export default function Contact() {
    const [result, setResult] = useState([]);

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6cdc2aaa-9309-4d1c-a2e5-0056374202e2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <section> 
          <div className="form-frame" class="columns">
              
              <iframe className="iframe" class="one" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.270160624405!2d-71.0314850246!3d42.058828271222424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4856a53d59269%3A0x812c211294549647!2s337%20W%20Chestnut%20St%2C%20Brockton%2C%20MA%2002301!5e0!3m2!1sen!2sus!4v1729010667519!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
              <div class="one">
                  <form className="contact-form" onSubmit={onSubmit}>
                    <p> Contact Us Form </p>
                    <label className="name-id">Name:</label>
                    <input className = "name" type="text" name="name" required/>
                    
                    <label className="email-id">Email:</label>
                    <input type="email" name="email" required/>

                    <label className="message-id">Message:</label>
                    <textarea name="message" required></textarea>
            
                    <button type="submit">Submit Form</button>
            
                  </form>
                  <span>{result}</span>
              </div>

          </div>

          <p className="order"> If you would like to order or have any questions, please fill out the form and Jennifer Mackin Bruce will get back to you ASAP. </p>
          
        </section>
       
    );
    
  }
  