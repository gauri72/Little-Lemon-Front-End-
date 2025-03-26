import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Little Lemon</h3>
          <p>Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order Online</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Address: Chicago, IL</p>
          <p>Phone number: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        <div className="footer-section">
          <h3>Social Media Links</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 