import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Logo />
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/order">Order Online</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 