import React from 'react';
import restaurantImage1 from '../assets/Mario and Adrian A.jpg';
import restaurantImage2 from '../assets/Mario and Adrian b.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="about-images">
          <img 
            src={restaurantImage1} 
            alt="Mario and Adrian" 
            className="about-img img-1"
          />
          <img 
            src={restaurantImage2} 
            alt="Mario and Adrian cooking" 
            className="about-img img-2"
          />
        </div>
      </div>
    </section>
  );
};

export default About; 