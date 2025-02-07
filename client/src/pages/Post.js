import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { getPostById } from '../axios'; // Import the function to fetch post by ID

const Post = () => {
  const { _id } = useParams(); // Get the post ID from the URL
  console.log("_id from useParams:", _id);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(_id); // Use the Axios function to fetch the post by ID
        setPost(response.data); // Assuming the post data is in the response's data field
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [_id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className='postSection'>
      <Navbar />
      <div className="post-container">
        <div className="post-image-container">
          {post.image && <img src={post.image} alt={post.title} />}
        </div>
        <div className="post-content">
          <h1 className="post-title">{post.title}</h1>
          <h2 className="post-subtitle">{post.subtitle}</h2>
          <p><strong>Description:</strong> {post.description}</p>
          <p><strong>Content:</strong> {post.content}</p>
          <div className="post-tags">
            <strong>Tags:</strong>
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;