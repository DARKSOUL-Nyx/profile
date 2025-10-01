import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile-section">
      <h2>About Me</h2>
      {/* It's better to move images to an `assets` folder and import them */}
      <img src="logo192.png" alt="VSS NISHWAN" className="profile-photo" />
      <h3>Building thoughtful technology at the intersection of code, data, and curiosity.</h3>
      
      <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Download Resume</a>
    </section>
  );
};

export default Profile;