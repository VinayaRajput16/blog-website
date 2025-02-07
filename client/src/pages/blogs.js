//blogs.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card"; // Import the Card component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllPostImg from "./images/All-posts.png";
import "./Blogs.css";

const heroData = {
  technology: {
    headline: "Latest in Technology",
    image: AllPostImg }, // Replace with your actual image paths
    'web development':{
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"},
  poem: {
    image:"https://images.pexels.com/photos/1151513/pexels-photo-1151513.jpeg?auto=compress&cs=tinysrgb&w=800"},
  default: {
    headline: "Welcome to Our Blog",
    image:AllPostImg}, // Fallback image
};

const Blogs = () => {
  const { category } = useParams(); // Extract category from the URL, if available
  const [loading, setLoading] = useState(true);

  const heroContent = heroData[category] || heroData.default;
  useEffect(() => {
    setLoading(false); // As the loading state is controlled in Card component
  }, [category]);

  if (loading) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  return (
    <div className="blogs-page">
      <Navbar />
      {/* Hero Section */}
      <div
        className="hero-section-blogs"
        style={{
          backgroundImage: `url(${heroContent.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h1>{heroContent.headline}</h1>
      </div>
      {/* Blog Cards */}
      <div className="blog-category">
        <Card category={category} />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
