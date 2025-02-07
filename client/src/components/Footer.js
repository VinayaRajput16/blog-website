import React from 'react';
import './Footer.css'; // Import your CSS file
import { FaFacebook, FaGooglePlus, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import Logo from './images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="column">
          <div className="footer-logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="column">
          <h3>Information</h3>
          <ul>
            <li>About Us</li>
            <li>More Search</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="column">
          <h3>Helpful Links</h3>
          <ul>
            <li>Services</li>
            <li>Supports</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="column">
          <h3>Our Services</h3>
          <ul>
            <li>Brands list</li>
            <li>Order</li>
            <li>Return & Exchange</li>
            <li>Fashion list</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="column contact">
          <h3>Contact Us</h3>
          <p>+91 8856979693</p>
          <p>rajputvinaya16903@gmail.com</p>
          <div className="social-icons">
            <FaFacebook />
            <FaGooglePlus />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>2018 company Ltd | All Right reserved</p>
        <div className="bottom-links">
          <span>FAQ</span>
          <span>Privacy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;