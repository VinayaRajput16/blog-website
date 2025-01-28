import React, { useState } from "react";
import "./Home.css"; // External CSS file for styling
import Navbar from "../components/Navbar";
// import heroImage from "./images/hero-bg.jpg";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Services from '../components/Services';


const Home = () => {
  
  return (
    <div className="home-container">
      <div className="hero-section">
        <Navbar />     
        <div className="hero-image">
          <div className="hero-cta">
            <h2>Dive into Web Development. Discover Our Services</h2>
            <p>Join me on a journey of exploration, with practical tips, personal insights, and the latest in tech trends to inspire your next project.</p>
            <div className="cta-buttons">
              <a href="#latest-blog" className="cta-primary">Read Latest Blog</a>
              <a href="#subscribe" className="cta-secondary">Explore more</a>
            </div>
          </div>
        </div>
      </div>

      <BlogCard/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default Home;
