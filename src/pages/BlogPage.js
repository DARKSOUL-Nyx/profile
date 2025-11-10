import React, { useState, useEffect } from 'react';
// import { blogPosts } from '../data/blogPosts.js'; // <-- We no longer need this
import BlogPostCard from '../components/BlogPostCard/BlogPostCard.js';
import './BlogPage.css';

// TODO: Paste your API URL from rss2json.com here
const MEDIUM_API_URL = process.env.REACT_APP_MEDIUM_API_URL;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch posts
    const fetchPosts = async () => {
      try {
        const response = await fetch(MEDIUM_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // The rss2json API returns posts in the 'items' array
        if (data.status === 'ok') {
          setPosts(data.items);
        } else {
          throw new Error('Failed to fetch posts from API.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchPosts();
  }, []); // The empty array [] means this effect runs once when the component mounts

  // --- Render content based on loading/error state ---
  if (loading) {
    return <div className="blog-container"><p className="blog-intro">Loading posts from Medium...</p></div>;
  }

  if (error) {
    return <div className="blog-container"><p className="blog-intro">Error: {error}</p></div>;
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">Field Notes & Blueprints</h1>
      <p className="blog-intro">
        In-depth articles, tutorials, and thoughts on technology, business, and philosophy.
      </p>
      
      <div className="blog-grid">
        {/* We now map over the 'posts' from our state instead of the static file */}
        {posts.map((post) => (
          <BlogPostCard key={post.guid} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;