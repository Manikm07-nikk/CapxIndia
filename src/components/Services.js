import React from 'react'
import user1 from './images/rsz_s1-removebg-preview.png'
import user2 from './images/ft1.jpg'
import user3 from './images/lt1-img.jpg'
import './Services.css'

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='container'>
                <h2>Services</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>At Capx India, we provide personalized financial planning to help you achieve your goals, manage investments, and secure your future. Our expert team creates customized strategies tailored to your needs.</p>
                        <p><span>Financial Planing</span></p>
                        <p>.............</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Tests your strategy on recent historical data that your backtest might not have included and helps you assess the robustness of your strategy in more recent market conditions.</p>
                        <p><span>Forward/Back Test</span></p>
                        <p>.............</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Enables you to deploy your tested strategy for live trading in real-time markets and provides access to real-time market data and execution capabilities.</p>
                        <p><span>Live Trade</span></p>
                        <p>.............</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
