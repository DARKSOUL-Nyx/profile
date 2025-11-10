import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css'; // We will use the new styles below

const HomePage = () => {
  return (
    // This container is centered and sized by the new CSS
    <div className="homepage-container">
      
      {/* Section 1: The Hook (from Initial_Draft.md) */}
      <section className="hero-section">
        <h1 className="hero-headline">
          Building Intelligent Systems, One Line of Code and One Big Question at a Time.
        </h1>
        <h2 className="hero-title">
          Software Developer | ML Engineer | Strategic Thinker
        </h2>
        <p className="hero-intro">
          I design and build end-to-end solutions, driven by a curiosity for not just how they work, but why they matter.
        </p>
        <div className="hero-cta-buttons">
          {/* This links to your ShowcasePage.js */}
          <Link to="/showcase" className="cta-button primary">
            View My Blueprints
          </Link>
          {/* This links to your AboutPage.js */}
          <Link to="/about" className="cta-button secondary">
            Read My Philosophy
          </Link>
        </div>
      </section>

      {/* Section 2: The Philosophy (from Initial_Draft.md) */}
      <section className="philosophy-section">
        <h2 className="section-title">My Operating System</h2>
        <div className="philosophy-content">
          <p>
            My journey into technology began with a simple desire: to build. But building isn't just about assembling parts; it's about understanding the whole system. That's why I ground myself in the fundamentals of Data Structures and Algorithms—they are the laws of physics in our digital world.
          </p>
          <p>
            A robust system needs more than just a strong foundation. My work is supported by three pillars: <strong>Technical Craftsmanship</strong> (building robust ML models and MLOps pipelines), <strong>Strategic Insight</strong> (analyzing business problems to ensure I'm solving the right problem), and <strong>Philosophical Inquiry</strong> (asking bigger questions about reality that bring a unique perspective to my problem-solving).
          </p>
          <p>
            This approach allows me to tackle challenges with a holistic view. I'm now looking to bring this architectural mindset to a team that values deep thinking and practical results.
          </p>
        </div>
      </section>

      {/* Section 3 & 4: Link to Showcase */}
      <section className="next-steps-section">
        <h2 className="section-title">Explore the Hub</h2>
        <p>
          My projects, writings, and products are centralized in the Exploration Hub, just one click away.
        </p>
        {/* This links to your ShowcasePage.js */}
        <Link to="/showcase" className="cta-button primary">
          Visit the Exploration Hub
        </Link>
      </section>

    </div>
  );
};

export default HomePage;