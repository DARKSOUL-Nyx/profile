import React from 'react';
import { posts } from '../data/blogPosts';
import BlogPostCard from '../components/BlogPostCard/BlogPostCard.js';
import './BlogPage.css';

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
