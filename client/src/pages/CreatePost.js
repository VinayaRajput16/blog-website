/* eslint-disable no-unused-vars */
import React, { useState, useEffect  } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill Snow theme
import Auth from './Auth'; // Import the login component
import './CreatePost.css';
import {createPost}  from '../axios';

const CreatePost = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    category:'',
    title: '',
    subtitle: '',
    description: '',
    content: '', // Content will be managed by ReactQuill
    tags: '',
    image: '', // For uploading a main image for the blog
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false); // Toggle for preview
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };


  // Toggle full-screen mode
  const toggleFullScreen = () => {
    setIsExpanded(!isExpanded);
  };

  // Quill modules for toolbar options
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ],
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value }); // Update content
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createPost(formData); // Call the createPost function to send data to the backend
      alert('Post created successfully!'); // Show success message as an alert
      // Optionally, you can redirect or reset the form here
    } catch (error) {
      alert('Error creating post: ' + (error.response?.data || error.message)); // Show error alert
  }finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return <Auth onLoginSuccess={handleLoginSuccess} />; // Render login form if not authenticated
  }

  return (
    <div>
      <h1>Create a New Post</h1>

      {!previewMode ? (
        <form onSubmit={handleSubmit} className='form'>
          {/* Title */}
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Subtitle */}
          <div>
            <label>Subtitle:</label>
            <input
              type="text"
              name="subtitle"
              maxLength={15}
              value={formData.subtitle}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              maxLength={25}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Content (Rich Text Editor) */}
          <div>
            <label>Content:</label>
            <ReactQuill className={`editor-container ${isExpanded ? 'expanded' : ''}`} onClick={toggleFullScreen}
              theme="snow"
              value={formData.content}
              onChange={handleContentChange}
              modules={modules}
              style={{ height: isExpanded ? '100vh' : '800px' }} // Toggle height
            />
          </div>

          {/* Tags */}
          <div>
            <label>Tags (comma-separated):</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          {/* Main Image */}
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      ) : (
        <div>
          <h2>Preview</h2>
          <h3>{formData.title}</h3>
          <h4>{formData.subtitle}</h4>
          <p>{formData.description}</p>
          <div dangerouslySetInnerHTML={{ __html: formData.content }} />
        </div>
      )}

      {/* Preview Mode Button */}
      <button onClick={() => setPreviewMode(!previewMode)}>
        {previewMode ? 'Edit Mode' : 'Preview Mode'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreatePost;
