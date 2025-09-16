import React from 'react';
import './BlogPostCard.css';

const BlogPostCard = ({ title, content, link }) => {
  return (
    <div className="blog-post-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <a href={link}>Read More</a>
    </div>
  );
};

export default BlogPostCard;