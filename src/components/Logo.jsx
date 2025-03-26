import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/Logo.svg';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logoImage} alt="Little Lemon Logo" className="logo-image" />
    </Link>
  );
};

export default Logo; 