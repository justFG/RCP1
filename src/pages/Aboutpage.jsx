
import React from "react";
import "./Aboutpage.css"; 
import Navbar from '../components/Navbar/Navbar'
const AboutPage = () => {
  return (<>
        <Navbar ab={true}/>
  <div className="about-container">
        
      
      <h4 className="about-title">About Us</h4>

      {/* Introduction */}
     <div className="about-intro">
        <p>
          We are a store specializing in selling computers and accessories, providing the best products at the best prices with excellent customer service.
        </p>
      </div>

      {/* Vision and Mission */}
      <div className="about-sections">
        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aim to become the top destination for anyone looking for high-quality computers.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To provide reliable computer products with fast technical support and a smooth online shopping experience.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="about-values">
        <h2>Our Values</h2>
        <div className="values-list">
          <span className="value quality">Quality</span>
          <span className="value trust">Trust</span>
          <span className="value support">Customer Service</span>
          <span className="value innovation">Innovation</span>
        </div>
      </div>
     </div>
     </>
    
    
  );
};

export default AboutPage;