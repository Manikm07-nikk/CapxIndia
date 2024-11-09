import React from 'react';
import about from './images/about-removebg-preview.png'; 
import user1 from './images/nikhil nikat.jpg';
import user2 from './images/ram gopal.jpg'
import user3 from './images/govinda mandalik.jpg'
import user4 from './images/manik.jpg'
import user5 from './images/chinmay ghayal.jpg'
import './About.css';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={about} alt='about' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>At Capxindia, we are dedicated to transforming your financial aspirations into reality. A visionary in the financial sector, our company is committed to providing innovative and personalized financial solutions to individuals and businesses. With a focus on excellence and integrity, we strive to exceed expectations and foster lasting relationships with our clients.</p>
                    <p>We believe that financial success should be within reach for everyone. Our mission is to empower you with the knowledge, tools, and expertise.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
            <h2 className="team-heading">Our Team</h2>
            <div className='team-cards'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={user1} alt='Nikhil Nikat' />
                    </div>
                    <h3>Mr. Nikhil Nikat</h3>
                    <h4>Founder</h4>
                    <p className="description">Mr. Nikhil Nikat is the visionary Founder of Capxindia, bringing a wealth of expertise in finance to the table. He holds an MBA in Finance, a testament to his dedication to mastering the intricacies of the financial world.</p>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={user2} alt='Mr. Ram Gopal Kashyap' />
                    </div>
                    <h3>Mr. Ram Gopal Kashyap</h3>
                    <h4>Co-Founder</h4>
                    <p className="description">Post-graduate from IIT Kharagpur with expertise in full-stack development, Python, React, Node.js, and AWS. Skilled in building scalable web applications for product-based companies</p>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={user3} alt='Mr. Govinda Mandalik' />
                    </div>
                    <h3>Mr. Govinda Mandalik</h3>
                    <h4>Senior Manager</h4>
                    <p className="description">With an MBA in HR, Mr. Govinda Mandalik is the driving force behind our human resources strategy at Capxindia. His expertise ensures our team remains our greatest asset.</p>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={user4} alt='Mr. Manik Mukhija' />
                    </div>
                    <h3>Mr. Manik Mukhija</h3>
                    <h4>Software Developer</h4>
                    <p className="description">Full-stack developer with expertise in React, Node.js, MongoDB, and JavaScript. Experienced in building responsive user interfaces and robust backend solutions, contributing to web projects.</p>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src={user5} alt='Mr. Chinmay Ghayal' />
                    </div>
                    <h3>Mr. Chinmay Ghayal</h3>
                    <h4>Software Developer</h4>
                    <p className="description">Chinmay Ghayal is a full-stack developer with expertise in scalable architecture, backend development. He has worked on challenging projects, consistently delivering robust solutions.</p>
                </div>
                {/* <div className='card'>
                    <div className='card-image'>
                        <img src='./images/team-member6.jpg' alt='Mr. Chinmay Ghayal' />
                    </div>
                    <h3>Mr. Chinmay Ghayal</h3>
                    <h4>Software Developer</h4>
                    <p className="description">Bio</p>
                </div> */}
            </div>
        </div>
    );
};

export default About;
