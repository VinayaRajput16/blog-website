import axios from 'axios';


// Base configuration for API
const API = axios.create({ baseURL: 'http://localhost:5000' });

// Add Authorization header to all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Export API functions
export const fetchPosts = () => API.get('/api/posts'); // Public route
export const createPost = (postData) => API.post('/api/posts', postData); // Protected route
export const getPostById = (postId) => API.get(`/api/posts/${postId}`);

// Fetch blogs, modified to handle both /blogs and /blogs/:category correctly
export const fetchBlogs = async (category) => {
  if (category) {
    return await API.get(`/api/blogs/${category}`); // Fetch blogs by category
  } else {
    return await API.get('/api/blogs'); // Fetch all blogs
  }
};

export const createBlog = (blogData) => API.post('/blogs', blogData);
export const updateBlog = (blogId, updatedData) => API.put(`/blogs/${blogId}`, updatedData);
export const deleteBlog = (blogId) => API.delete(`/blogs/${blogId}`);
export const loginUser = (credentials) => API.post('/api/auth/login', credentials);
export const registerUser = (userData) => API.post('/api/auth/register', userData); // Registration route
