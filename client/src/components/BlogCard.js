import React, { useEffect, useState } from "react";
import { fetchPosts } from "../axios";
import "./BlogCard.css";

const BlogCard = () => {
  const [blogData, setBlogData] = useState([]); // State for storing dynamic blog data
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch blog data from the backend API
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetchPosts(); // Adjust API URL as needed

        setBlogData(response.data); // Update blogData state with fetched posts
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false); // Handle error case
      }
    };

    fetchBlogData();
  }, []); // Empty array means it runs once on component mount

  if (loading) {
    return <div>Loading...</div>; // Optional loading state while data is being fetched
  }

  const lastIndex = 0;
  const blogDate = new Date(blogData[lastIndex].createdAt);

  // Extract day, month, and year
  const day = String(blogDate.getDate()).padStart(2, '0'); // Add leading zero if needed
  const month = String(blogDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
  const year = String(blogDate.getFullYear()).slice(-2); // Get last two digits of the year

  // Format the date as dd/mm/yy
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="blogs-post">
      <div className="category-nav">
        <a href="/blogs" className="category-link">All Posts</a>
        <a href="/blogs/technology" className="category-link">Technology</a>
        <a href="/blogs/web development" className="category-link">Web development</a>
        <a href="/blogs/poems" className="category-link">Poems</a>
      </div>

      <div className="blog-section">
        {/* Left Column: Recent Post */}
        {blogData.length > 0 && (
          <div className="recent-post-card">
            <h2 className="blog-header">Recent Post</h2>
            <div className="blog-card">
              <div className="meta">
                <div
                  className="photo"
                  style={{
                    backgroundImage: `url(${blogData[lastIndex].image})`, // Displaying the first blog's image
                  }}
                ></div>
                <ul className="details">
                  <li className="author">
                    <a href="#">Vinaya</a> {/* Change if needed */}
                  </li>
                  <li className="date">{formattedDate}</li> {/* Format if necessary */}
                  <li className="tags">
                    <ul>
                      {blogData[lastIndex].tags.map((tag, index) => (
                        <li key={index}>
                          <a href="#">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="description">
                <h1>{blogData[lastIndex].title}</h1>
                <h2>{blogData[lastIndex].subtitle}</h2>
                <p>{blogData[lastIndex].description}</p>
                <p className="read-more">
                  <a href={`/post/${blogData[lastIndex]._id}`}>Read More</a> {/* Dynamic link with post ID */}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Other Posts (limit to 3 posts) */}
        <div className="other-posts-section" >
          <h2 className="blog-header">Other Posts</h2>
          <div className="other-posts">
            <div className="other-posts-container">
              {blogData.slice(1, 6).map((blog) => ( // Display only the first 3 blogs after the recent post
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
                      <li className="date">{blog.createdAt}</li>
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
                      <a href={`/post/${blog._id}`}>Read More</a> {/* Dynamic link with post ID */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="see-all-blogs">
            <a href="/blogs" className="see-all-btn">See All Blogs <i className="	fas fa-arrow-right"></i> </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
