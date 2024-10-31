import React from 'react';

const contacts = [
    {
        id: 'papa',
        name: 'Daniel E. Mackin',
        position: 'President',
        phone: '(508) - 584 - 4248',
        email: 'mackinpallet@gmail.com',
        imgSrc: 'MPTimages/papa.jpg',
    },
    {
        id: 'mom',
        name: 'Jennifer P. Mackin Bruce',
        position: 'Chief Financial Officer',
        phone: '(508) - 612 - 0831',
        email: 'mackinpallet@gmail.com',
        imgSrc: 'MPTimages/mom.jpg',
    },
    {
        id: 'nana',
        name: 'Rhonda M. Mackin',
        position: 'Clerk',
        phone: '(508) - 584 - 4248',
        email: 'mackinpallet@gmail.com',
        imgSrc: 'MPTimages/nana.jpg',
    },
];

const ContactUs = () => {
    return (
        <div id="contact-us" className="columns">
            {contacts.map(contact => (
                <section key={contact.id} id={contact.id} className="one">
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
