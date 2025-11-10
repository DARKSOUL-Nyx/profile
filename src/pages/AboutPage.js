import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css'; // We will create this new CSS file next

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">My Operating System</h1>
      <p className="about-intro">
        This is the blueprint of how I think, build, and approach problems—from the first line of code to the final strategic insight.
      </p>

      {/* --- Section 1: The Foundation --- */}
      <div className="philosophy-content">
        <h2 className="philosophy-subtitle">The Foundation: Understanding the System</h2>
        <p>
          My journey into technology began with a simple desire: to build. But building isn't just about assembling parts; it's about understanding the whole system.
        </p>
        <p>
          That's why I ground myself in the fundamentals of Data Structures and Algorithms—they are the laws of physics in our digital world.
        </p>
      </div>

      {/* --- Section 2: The Three Pillars --- */}
      <div className="philosophy-content">
        <h2 className="philosophy-subtitle">The Three Pillars</h2>
        <div className="pillars-grid">
          
          <div className="pillar-card">
            <h3>Technical Craftsmanship</h3>
            <p>Building robust ML models, MLOps pipelines, and full-stack applications that are scalable, efficient, and maintainable.</p>
          </div>
          
          <div className="pillar-card">
            <h3>Strategic Insight</h3>
            <p>Analyzing business problems to ensure I'm solving the *right* problem, not just the most obvious one. Technology serves the strategy.</p>
          </div>
          
          <div className="pillar-card">
            <h3>Philosophical Inquiry</h3>
            <p>Asking the bigger "why" questions that bring a unique and ethical perspective to problem-solving in a world of complex systems.</p>
          </div>

        </div>
      </div>

      {/* --- Section 3: The Application --- */}
      <div className="philosophy-content about-cta">
        <h2 className="philosophy-subtitle">Application: From Blueprint to Reality</h2>
        <p>
          This approach allows me to tackle challenges like assessing building damage from the sky or optimizing a business process with a holistic view.
        </p>
        <p>
          I am always looking to bring this architectural mindset to a team that values deep thinking, first-principles reasoning, and practical results.
        </p>
        
        <div className="about-cta-buttons">
          <Link to="/projects" className="cta-button primary">
            See My Work
          </Link>
          <Link to="/contact" className="cta-button secondary">
            Get In Touch
          </Link>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;