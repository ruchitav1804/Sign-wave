import React from 'react';
import '../Footer.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; 2024 Sign Wave. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/accordion" className="footer-link">About Us</Link>
          <Link to="/Contact" className="footer-link">Contact Us</Link>
          <Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link>
          <Link to="/TermsOfService" className="footer-link">Terms of Service</Link>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com" className="social-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.github.com" className="social-icon"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.kaggle.com" className="social-icon"><FontAwesomeIcon icon={faKaggle} /></a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
