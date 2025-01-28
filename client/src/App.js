import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import Blogs from './pages/blogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post/:_id" element={<Post />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/blogs/:category" element={<Blogs />} />        
        <Route path="/blogs" element={<Blogs />} />        

      </Routes>
    </Router>
  );
}

export default App;
