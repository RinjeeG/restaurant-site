import React from 'react';
import coverPhoto from '../assets/images/cover.jpg';

const About = () => {
  return (
    <div id="about" className="container py-5">
      <h2 className="text-center mb-5">About Us</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3 className="mb-3">Our Story</h3>
          <p>
            Welcome to Limbu Kitchen, where we serve delicious food with a focus on fresh ingredients and 
            an unforgettable dining experience. Established in 2024, we are committed to provide great food and 
            excellent service to our guests.
          </p>
          <p>
            Our restaurant is known for its cultural dishes , and we take pride in the quality and flavors of 
            every meal we prepare. Join us for a culinary journey where tradition meets innovation.
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src= {coverPhoto} // Replace with actual image URL
            alt="Restaurant"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
