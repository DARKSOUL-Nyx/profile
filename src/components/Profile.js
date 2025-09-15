import React from 'react';

const Profile = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src="your-photo.jpg" alt="Your Name" style={{ width: '200px', borderRadius: '50%' }} />
      <h3>Your Name</h3>
      <p>A brief, compelling bio about your skills and what you do. Mention your expertise in React!</p>
      <a href="link-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
};

export default Profile;