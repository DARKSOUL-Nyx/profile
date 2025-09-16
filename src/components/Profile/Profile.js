import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile-section">
      <h2>About Me</h2>
      {/* It's better to move images to an `assets` folder and import them */}
      <img src="your-photo.jpg" alt="Your Name" className="profile-photo" />
      <h3>Your Name</h3>
      <p>A brief, compelling bio about your skills and what you do. Mention your expertise in React!</p>
      <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Download Resume</a>
    </section>
  );
};

export default Profile;