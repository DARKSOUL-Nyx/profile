import React from 'react';
import './ProjectCard.css';
import { FaStar, FaCodeFork, FaCircle } from 'react-icons/fa6';

const languageColor = (language) => {
  // ... (Your existing languageColor function remains the same) ...
  switch (language) {
    case 'JavaScript': return '#f1e05a';
    case 'Python': return '#3572A5';
    case 'TypeScript': return '#3178c6';
    case 'Jupyter Notebook': return '#DA5B0B';
    case 'HTML': return '#e34c26';
    case 'CSS': return '#563d7c';
    default: return '#6b7280';
  }
};

// Accept 'onViewCaseStudy' as a prop
const ProjectCard = ({ repo, onViewCaseStudy }) => {
  return (
    <div className="project-card">
      <div className="card-header">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-name"
        >
          {repo.name}
        </a>
        <p className="repo-description">{repo.description}</p>
      </div>
      
      <div className="card-footer">
        <div className="repo-stats">
          {/* ... (Your existing repo-stats spans remain the same) ... */}
          {repo.language && (
            <span className="repo-stat">
              <FaCircle size={12} style={{ color: languageColor(repo.language) }} />
              {repo.language}
            </span>
          )}
          <span className="repo-stat">
            <FaStar size={14} style={{ color: '#f1e05a' }} />
            {repo.stargazers_count}
          </span>
          <span className="repo-stat">
            <FaCodeFork size={14} style={{ color: '#8C9EFF' }} />
            {repo.forks_count}
          </span>
        </div>
        
        <div className="repo-topics">
          {repo.topics.map(topic => (
            <span key={topic} className="repo-topic-tag">{topic}</span>
          ))}
        </div>

        {/* --- NEW: Case Study Button --- */}
        <button onClick={onViewCaseStudy} className="case-study-button">
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;