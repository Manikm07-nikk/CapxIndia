import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Using SMTPJS to send email
        window.Email.send({
            SecureToken: "Token",  // Replace with SMTPJS SecureToken (no need for username/password)
            To: "To whom you have to send",  // Recipient's email
            From: email,  // Sender's email (the user's email)
            Subject: `New Message from ${name}`,
            Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
        }).then(
            (message) => {
                alert("Message sent successfully!");
                console.log("Message sent successfully!")
                setName('');
                setEmail('');
                setMessage('');
                setIsSending(false);
            }
        ).catch(err => {
            console.error("Failed to send message", err);
            alert("Message failed to send.");
            setIsSending(false);
        });
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
                        name="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
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
                        disabled={isSending}
                    >
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
