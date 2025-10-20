import React from 'react';
import './ProjectsPage.css';

const ProjectCard = ({ title, description, tags, link }) => (
    <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
            {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        {link && <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>}
    </div>
);

const ProjectsPage = () => {
  const mockProjects = [
    { id: 1, title: "Quantum Vision Classifier", description: "A high-accuracy image classification model using a hybrid Vision Transformer architecture and MLOps deployment pipeline.", tags: ["Python", "TensorFlow", "ViT", "MLOps"], link: "#" },
    { id: 2, title: "Decentralized Finance Tracker", description: "Full-stack application for tracking portfolio performance across multiple DeFi protocols using React and Web3 integration.", tags: ["React", "Solidity", "Ethers.js", "Tailwind CSS"], link: "#" },
    { id: 3, title: "Personal AI Assistant (CLI)", description: "A custom command-line interface tool powered by the Gemini API for quick research, code generation, and task management.", tags: ["Python", "Gemini API", "CLI", "Shell"], link: "#" },
    { id: 4, title: "Scroll-Driven 3D Portfolio", description: "The website you are currently viewing, featuring Three.js and React-Three-Fiber for immersive spatial navigation.", tags: ["React", "Three.js", "GSAP", "R3F"], link: "#" },
  ];

  return (
    <div className="projects-page-container content-container">
      <h1>Featured Blueprints</h1>
      <p>My journey through code, data science, and engineering, focusing on impactful, scalable solutions.</p>
      
      <div className="projects-grid">
        {mockProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      
      {/* Adding extra space to ensure the page scrolls and triggers the 3D camera */}
      <div style={{ height: '30vh' }}></div> 
    </div>
  );
};

export default ProjectsPage;
