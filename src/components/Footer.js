import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer-nav">
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                
                <div className="contact-info">
                    <p>Phone: <a href="tel:+91 705-722-2020">+91 705-722-2020</a></p>
                    <p>Email: <a href="mailto:contact@capxindia.in">contact@capxindia.in</a></p>
                </div>
                
                <div className="social-media">
                    <a href="https://www.facebook.com/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/i/flow/login" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/capx-india/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                </div>

                <hr />
                
                <div className="bottom">
                    <p>&copy; 2024 Execute, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
