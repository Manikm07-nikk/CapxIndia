import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [stateMessage, setStateMessage] = useState(null);  
    const [name, setName] = useState("");  
    const [email, setEmail] = useState("");  
    const [message, setMessage] = useState(""); 

   const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        "lsTWyjul4m-ayi64p"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.log(error);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    e.target.reset();
    setName('');
    setEmail('');
    setMessage('');
};

    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <div className='col-1'>
                    <h3>Welcome to CAPXINDIA!!!</h3>
                    <h3>"Where Stocks Meet Success"</h3>
                    <p>At Capxindia, we believe in simplifying the complexities of finance and making financial success accessible to all. Join us on this financial journey, and let's create a prosperous future together.</p>
                    <button className='button'>Get your free financial analysis</button>
                </div>
<form className="contact-form" onSubmit={sendEmail}>
    <label htmlFor="name">Name:</label>
    <input 
        type="text" 
        id="name" 
        name="from_name" // This must match the placeholder in the template
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
    />

    <label htmlFor="email">Email:</label>
    <input 
        type="email" 
        id="email" 
        name="from_email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
    />

    <label htmlFor="message">Message:</label>
    <textarea 
        id="message" 
        name="message" 
        rows="5" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required
    ></textarea>

    <button 
        className='submit-button' 
        type="submit" 
        disabled={isSubmitting}
    >
        {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
    {stateMessage && <p className="state-message">{stateMessage}</p>}
</form>


            </div>
        </div>
    );
}

export default Contact;
