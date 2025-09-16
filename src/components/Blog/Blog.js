import React from 'react';
import { posts } from '../../data/blogPosts'; // Adjust path based on new location
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog-section">
      <h2>My Blog</h2>
      <div className="blog-posts-container">
        {posts.map(post => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;