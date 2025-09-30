import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile-section">
      <h2>About Me</h2>
      {/* It's better to move images to an `assets` folder and import them */}
      <img src="logo192.png" alt="VSS NISHWAN" className="profile-photo" />
      <h3>Building thoughtful technology at the intersection of code, data, and curiosity.</h3>
      <p>Welcome! I'm a builder at heart, driven by a fascination with how technology can solve complex challenges. My journey is rooted in software development and machine learning, particularly in the realm of computer vision. I enjoy taking ideas from concept to reality, whether it's a complex project combining ResNet50 and Vision Transformers, or a practical tool like an AI nutrition tracker.

        But for me, the 'how' is just as important as the 'what'. My passion extends beyond the code to understanding the bigger picture. I actively study business strategy and market analysis in the AI space and enjoy dissecting industrial problems to find optimal solutions. This analytical mindset is balanced by a deep interest in spirituality and the nature of reality, which gives me a unique perspective on creative problem-solving.

        From building custom dashboards to track my DSA and gym progress to developing MLOps pipelines for fun classifiers, I am constantly learning and creating. I am currently looking for a remote software developer opportunity to apply my skills and grow within a team. Thank you for visiting.</p>
      <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Download Resume</a>
    </section>
  );
};

export default Profile;