import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Every Item out there is our anchor! Their love and support inspires us
                        to never back down, even in turbulent waters and stormy seas. No wonder then,
                        that we've sailed from strength to strength, even in a year like 2020.</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">MR-3 Road, GPH Campus Pologround, Indore, Madhya Pradesh, 00000  </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0731 272 0001</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: shopy@stor.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text" >Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theater</span>
                    <span className="text">Projectors</span>


                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy & Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Term & Condition</span>
                    <span className="text">Contact Us</span>

                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        SHOPY STORE 2023 CREATED BY S Store.  PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img className="img" src={Payment} alt=""  />
                </div>
            </div>

        </footer>
    )
};

export default Footer;
