import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogs } from "../axios"; // Adjust the path if needed
import './BlogCard.css';

const Card = () => {
  const { category } = useParams(); // Extract category from the URL, if available
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlogs(category); // Fetch blogs with Axios
        setBlogData(response.data); // Data is already sorted
        setLoading(false);
      } catch (error) {
        setError("Error fetching data.");
        setLoading(false);
      }
    };
  
    fetchData();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (blogData.length === 0) return <div>No blogs found.</div>;

  return (
    <div className="other-posts">
      <h2 className="blog-header" style={{ marginBottom: '20px' }}>{category ? `${category} Posts` : 'All Posts'}</h2>
      <div className="other-posts-container">
        {blogData.map((blog) => (
          <div key={blog._id} className="blog-card">
            <div className="meta">
              <div
                className="photo"
                style={{
                  backgroundImage: `url(${blog.image})`,
                }}
              ></div>
              <ul className="details">
                <li className="author">
                  <a href="#">Vinaya</a>
                </li>
                <li className="date">{new Date(blog.createdAt).toLocaleDateString()}</li>
                <li className="tags">
                  <ul>
                    {blog.tags.map((tag, index) => (
                      <li key={index}>
                        <a href="#">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="description">
              <h1>{blog.title}</h1>
              <h2>{blog.subtitle}</h2>
              <p>{blog.description}</p>
              <p className="read-more">
                <a href={`/post/${blog._id}`}>Read More</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
