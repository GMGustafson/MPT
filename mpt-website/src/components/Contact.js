import "../css/Contacts.css"; 

const Contact = (Contact) => {
    return (
    <section id="contact" className="one">
       <img id={`${contact.id}-pic`} src={"http://localhost:3003/images/" + contact.image} alt={`${contact.name}'s picture`} />
        <section id={`${contact.id}-info`}>
            <p id="name">{contact.name}</p>
            <p>Position: {contact.position}</p>
            <p>Phone Number: {contact.phone}</p>
            <p>Email: {contact.email}</p>
        </section> 
    </section>

    );
};

export default Contact;
