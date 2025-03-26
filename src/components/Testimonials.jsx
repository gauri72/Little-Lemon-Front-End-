import React from 'react';
import testimonialUser1 from '../assets/testimonial-user-1.jpg';
import testimonialUser2 from '../assets/testimonial-user-2.jpg';
import testimonialUser3 from '../assets/testimonial-user-3.jpg';
import testimonialUser4 from '../assets/testimonial-user-4.jpg';
import '../styles/Testimonials.css';

const TestimonialCard = ({ rating, name, review, image }) => (
  <div className="testimonial-card">
    <div className="rating">
      Rating
      <div className="rating-stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    </div>
    <div className="reviewer-info">
      <img 
        src={image}
        alt={name} 
        className="reviewer-image"
      />
      <h4>{name}</h4>
    </div>
    <p className="review-text">{review}</p>
  </div>
);

const Testimonials = () => {
  const generateRandomRating = () => Math.floor(Math.random() * 2) + 4; // Generates either 4 or 5

  const testimonials = [
    {
      rating: generateRandomRating(),
      name: "Sarah M.",
      review: "Amazing Mediterranean cuisine!",
      image: testimonialUser1
    },
    {
      rating: generateRandomRating(),
      name: "John D.",
      review: "Best service in Chicago!",
      image: testimonialUser2
    },
    {
      rating: generateRandomRating(),
      name: "Maria R.",
      review: "Authentic flavors!",
      image: testimonialUser3
    },
    {
      rating: generateRandomRating(),
      name: "David L.",
      review: "Great atmosphere!",
      image: testimonialUser4
    }
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 