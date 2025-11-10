import React from 'react';
// import { Link } from 'react-router-dom'; // <-- No longer needed for this card
import './BlogPostCard.css';

// This function creates a plain-text snippet from the HTML in the description
const createSnippet = (htmlContent) => {
  // Create a temporary element to parse the HTML
  const el = document.createElement('div');
  el.innerHTML = htmlContent;
  
  // Get the text content, trim whitespace, and take the first 150 chars
  const text = el.textContent || el.innerText || "";
  return text.trim().substring(0, 150) + '...';
};

const BlogPostCard = ({ post }) => {
  // Format the date to be more readable
  const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // Create the text snippet
  const snippet = createSnippet(post.description);

  return (
    // This is now an <a> tag to link externally to Medium
    <a 
      href={post.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="blog-post-card"
    >
      <span className="card-date">{formattedDate}</span>
      <h2 className="card-title">{post.title}</h2>
      <p className="card-snippet">{snippet}</p>
      
      <div className="card-tags-container">
        {/* Medium provides tags in 'categories' array */}
        {post.categories.map((tag, index) => (
          <span key={index} className="card-tag">{tag}</span>
        ))}
      </div>
    </a>
  );
};

export default BlogPostCard;