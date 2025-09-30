// src/components/Blog/Blog.js
import React from 'react';
import { posts as blogPosts } from '../../data/blogPosts'; // Import the blog data
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import './Blog.css'; // We will create this file

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <h2>From the Blog</h2>
      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;