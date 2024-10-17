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
                <hr />
                <div className="bottom">
                    <p>&copy; 2024 Execute, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
