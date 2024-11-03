import React from 'react';
import "../css/ContactUs.css"; 
import {useState, useEffect } from "react";
import axios from "axios";



import HousePlan from "./HousePlan";

const HousePlans = () => {
    

    
    
        

const ContactUs = () => {
    const [contact, setContacts] = useState([]);

    useEffect(()=>{
        (async() => {
            const response = await axios.get("https://portiaportia.github.io/json/contacts-page.json");
            setHouses(response.data);
        })();
    },[]);

    return (
        <div id="contact-us" className="columns">
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
    );
};

export default ContactUs;
