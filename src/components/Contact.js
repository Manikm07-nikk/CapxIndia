import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='container'>
                {/* <h2>Contact</h2> */}
                <div className='col-1'>
                    <p>Welcome to CAPXINDIA!!!</p>
                    <p>"Where Stocks Meet Success"</p>
                    <p>At Capxindia, we believe in simplifying the complexities of finance and making financial success accessible to all. Join us on this financial journey, and let's create a prosperous future together.</p>
                    <button className='button'>Get your free financial analysis</button>
                </div>
                {/* <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div> */}
                <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
