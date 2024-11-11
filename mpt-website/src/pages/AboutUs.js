import React from 'react';
import "../css/AboutUs.css"; 

const AboutUs = () => {
    return (
        <div id="about-us">
        <h1 id="page-heading">About Us</h1> 
        <div id="about-us1" className="columns">
            <section className="one"><img className="aboutus-gallery" src = "MPTimages/mom&papa.jpg" /></section>
            <section id="about-us11" className ="four"> 
                <p id ="font"> At Mackin Pallet & Trucking, we specialize in buying and selling high-quality pallets with a steadfast commitment to exceptional service. Whether you're looking for reliable pallet solutions or need storage trailers or containers, we’ve got you covered with a range of options for sale or lease. </p>
                <p id ="font">We’re proud to offer services like same-day delivery to ensure your operations run smoothly.</p>
                <p id ="font"> As a family-owned business with over 35 years of experience, our journey began with a simple goal: to provide dependable pallet solutions to businesses of all sizes. Over the decades, we’ve grown, but our core values of reliability, customer satisfaction, and integrity have remained constant. We believe in building lasting relationships with our clients by consistently meeting their needs with quality products and personalized service. </p>
            </section>
        </div>

        <div id="about-us2" className="columns">
            <section id="about-us22" className = "four"> 
                <p id ="font"> What sets us apart? Our dedication to ensuring your experience is hassle-free, whether it’s through fast deliveries, customized storage solutions, or our hands-on customer support. We understand that your success is our success, and we work hard every day to exceed your expectations.</p>
                <p  id ="font"> As part of our ongoing commitment to the community and the environment, we also explore sustainable practices, such as recycling pallets to reduce waste. </p>
                <p  id ="font"> Our team is made up of passionate professionals who take pride in the work we do. Being a family-owned business means that every customer is treated like family—because, for us, it's personal.</p>
                <p  id ="font"> We invite you to explore our services, reach out with any questions, and experience the Mackin Pallet & Trucking difference.   </p>
            </section>
            <section className="one">
            <img className="aboutus-gallery" src = "MPTimages/mom&papa2.jpg" /> 
            </section>
        </div>
    </div>  
    );
   
};
    
export default AboutUs; 

           
    