import "./Newsletter.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import React, { useState } from 'react';

function SubscriptionForm() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Assuming you have some code here to handle subscription
        // You can add an API call or any other logic here
        // Once the subscription is successful, set subscribed state to true
        setSubscribed(true);
    };

    return (
        <div className="form1">
            {subscribed ? (
                <div className="msg">
                    <p>Thank you for Subscribing !</p>
                </div>
            ) : (
                <form onSubmit={handleSubscribe} >
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required /> &nbsp;&nbsp;&nbsp;
                    <button type="submit">Subscribe</button>
                </form>
            )}
        </div>
    );
}

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newslettr-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">Sing up for latest updates and offers</span>
                <div className="form">
                    <SubscriptionForm />
                </div>
                <span className="text"> Will be used in accordance with our Privacy & Policy</span><br />
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebook size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
