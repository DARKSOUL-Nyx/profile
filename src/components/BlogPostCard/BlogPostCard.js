import React from 'react';
import './BlogPostCard.css';

const BlogPostCard = ({ title, content, link ,time,category }) => {
  return (
        <div class="section">
            <div class="cards-grid">
                <div class="card glass-card">
                    <div class="card-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" alt="Technology" class="card-image" />
                    </div>
                    <div class="card-content">
                        <span class="card-category">{category}</span>
                        <h3 class="card-title">{title}</h3>
                        <p class="card-excerpt">{content}</p>
                        <div class="card-footer">
                            <div class="card-author">
                                <div class="author-avatar"></div>
                                <span class="author-name">VSS NISHWAN</span>
                            </div>
                            <span class="card-meta">{time} min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default BlogPostCard;