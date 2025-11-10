import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // Import for animations
import ProjectCard from '../components/ProjectCard/ProjectCard.js';
import ProjectModal from '../components/ProjectModal/ProjectModal.js'; // We will create this
import './ProjectsPage.css';

// TODO: ADD YOUR GITHUB USERNAME HERE
const GITHUB_USERNAME = "DARKSOUL-Nyx"; // Make sure this is still correct!
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedRepo, setSelectedRepo] = useState(null); // <-- NEW STATE
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ... (Your existing useEffect fetch logic remains exactly the same) ...
    const fetchRepos = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        data = data.filter(repo => !repo.fork);
        setRepos(data);
        const topics = data.flatMap(repo => repo.topics);
        const uniqueTopics = [...new Set(topics)];
        setAllTopics(['All', ...uniqueTopics]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const filteredRepos = selectedTopic === 'All'
    ? repos
    : repos.filter(repo => repo.topics.includes(selectedTopic));

  // ... (Your loading/error checks remain the same) ...
  if (loading) {
    return <div className="projects-container"><p className="projects-intro">Loading Blueprints from GitHub...</p></div>;
  }
  if (error) {
    return <div className="projects-container"><p className="projects-intro">Error: {error}</p></div>;
  }

  return (
    <div className="projects-container">
      <h1 className="projects-title">Featured Blueprints</h1>
      <p className="projects-intro">
        A live look at my public repositories. Filter them by topic.
      </p>

      {/* --- Filter Bar (Unchanged) --- */}
      <div className="filter-bar">
        {allTopics.map(topic => (
          <button
            key={topic}
            className={`filter-pill ${selectedTopic === topic ? 'active' : ''}`}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* --- Project Grid (Updated) --- */}
      <div className="project-grid">
        {filteredRepos.map(repo => (
          <ProjectCard
            key={repo.id}
            repo={repo}
            // Pass the setter function to the card
            onViewCaseStudy={() => setSelectedRepo(repo)}
          />
        ))}
      </div>

      {/* --- NEW: Modal Animation Wrapper --- */}
      <AnimatePresence>
        {selectedRepo && (
          <ProjectModal
            repo={selectedRepo}
            closeModal={() => setSelectedRepo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;