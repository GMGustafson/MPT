
import "../css/ContactUs.css"; 
import {useState, useEffect } from "react";
import axios from "axios";

const ContactUs = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://raw.githubusercontent.com/GMGustafson/MPT/refs/heads/main/mpt-website/src/json/contacts.json");
            setContacts(response.data);
        })();
    },[]);

    return (
        <div id="contact-us"> 
            <h1 id="page-heading">Contact Us</h1> 
            <div className="columns">
                {contacts.map(contact => (
                    <section id={contact.id} className="one">
                        <img id={`${contact.id}-pic`} src={contact.imgSrc} alt={`${contact.name}'s picture`} />
                        <section id={`${contact.id}-info`}>
                            <p id="name">{contact.name}</p>
                            <p>Position: {contact.position}</p>
                            <p>Phone Number: {contact.phone}</p>
                            <p>Email: {contact.email}</p>
                        </section>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;
