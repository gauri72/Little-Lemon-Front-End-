import React from 'react';
import { Link } from 'react-router-dom';
import greekSalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon dessert.jpg';
import '../styles/Specials.css';

const SpecialCard = ({ title, price, image, alt }) => (
  <div className="special-card">
    <div className="card-image">
      <img src={image} alt={alt} />
    </div>
    <div className="card-content">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="price">${price}</span>
      </div>
    </div>
  </div>
);

const Specials = () => {
  const specialItems = [
    {
      title: "Greek salad",
      price: "12.99",
      image: greekSalad,
      alt: "Greek salad with fresh vegetables"
    },
    {
      title: "Bruchetta",
      price: "5.99",
      image: bruschetta,
      alt: "Bruschetta with tomatoes"
    },
    {
      title: "Lemon Dessert",
      price: "5.00",
      image: lemonDessert,
      alt: "Lemon dessert cake"
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <Link to="/menu" className="menu-button">
          Online Menu
        </Link>
      </div>
      <div className="specials-grid">
        {specialItems.map((item, index) => (
          <SpecialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Specials; 