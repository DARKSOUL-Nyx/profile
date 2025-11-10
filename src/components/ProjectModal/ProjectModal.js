import React from 'react';
import { motion } from 'framer-motion';
import { FaXmark, FaGithub } from 'react-icons/fa6';
import './ProjectModal.css';

// Animation variants for the backdrop
const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// Animation variants for the modal
const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.1, type: "spring", stiffness: 120 },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ProjectModal = ({ repo, closeModal }) => {
  return (
    // The backdrop
    <motion.div
      className="modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeModal} // Close modal when backdrop is clicked
    >
      {/* The modal content */}
      <motion.div
        className="modal-content"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()} // Prevents click from closing modal
      >
        <button className="modal-close-button" onClick={closeModal}>
          <FaXmark />
        </button>
        
        <h2 className="modal-title">{repo.name}</h2>
        <p className="modal-description">{repo.description}</p>
        
        <div className="modal-body">
          <h3>Case Study</h3>
          <p>
            This is where your detailed case study for the project would go. 
            You could fetch a `README.md` file, or have a separate data file 
            that maps project names to longer descriptions.
          </p>
          <p>
            For now, this serves as a placeholder to show how the modal works.
            We can populate this with real data later.
          </p>
          
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="modal-github-link"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;