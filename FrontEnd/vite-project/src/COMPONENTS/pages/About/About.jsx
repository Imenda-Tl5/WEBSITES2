import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <section>

        <h1>Welcome to FoodS</h1>
        <p>
          At <strong>Food Delight</strong>, we believe that food is more than just a meal—it's an experience.  
          Founded in 2024, our journey began with a simple goal: to serve delicious, high-quality, and  
          affordable meals that bring people together. Whether you’re looking for a quick bite on the go  
          or a hearty meal to share with loved ones, we’re here to satisfy your cravings.
        </p>
        </section>

<section>

        <h2>Our Passion for Food</h2>
        <p>
          Food Delight is built on a passion for fresh ingredients, bold flavors, and exceptional service.  
          We carefully craft each dish using locally sourced produce, premium meats, and freshly baked bread  
          to ensure every bite is bursting with flavor. From our signature burgers to handcrafted pizzas and  
          gourmet pastas, we take pride in serving meals that make you feel at home.
        </p>
        </section>
<section>

        <h2>Our Commitment to Quality</h2>
        <p>
          Quality is at the heart of everything we do. We never compromise on taste, freshness, or customer satisfaction.  
          Every dish is prepared with care and attention to detail, ensuring that you receive only the best.  
          Our chefs and team members are dedicated to providing you with a memorable dining experience—  
          whether you're dining in, ordering takeout, or getting your favorite meal delivered straight to your door.
        </p>

        </section>
<section className='why'>

        <h2>Why Choose FoodS?</h2>
        <ul>
          <li> Made with fresh, high-quality ingredients</li>
          <li> Affordable and delicious gourmet meals</li>
          <li> Fast and friendly service</li>
          <li> Easy online ordering and quick delivery</li>
          <li> A menu that caters to all taste preferences</li>
        </ul>
        </section>
<section>

        <h2>Join Us in the Food Delight Experience</h2>
        <p>
          Whether you're stopping by for a quick lunch, enjoying a family dinner,  
          or celebrating a special occasion, Food Delight is here to serve you.  
          We invite you to explore our menu, savor our flavors, and experience food made with love and dedication.
        </p>
        </section>

        <button className="explore-btn">Explore Our Menu</button>
      </div>
    </div>
  );
};

export default About;
