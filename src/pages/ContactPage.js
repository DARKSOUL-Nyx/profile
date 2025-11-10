import React, { useState } from 'react';
import './ContactPage.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    reason: '', // <-- NEW: To store the contact reason
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      reason: '', // <-- NEW: Reset the reason
    });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect</h1>
      
      {/* --- NEW: Updated Intro Text --- */}
      <p className="contact-intro">
        I'm always open to new opportunities, challenging problems, or just 
        a deep conversation about code and consciousness.
      </p>

      {/* --- Social Links (Unchanged) --- */}
      <div className="social-links-container">
        <a 
          href="https://github.com/your-username" // <-- TODO: Add your GitHub username
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a 
          href="https://linkedin.com/in/your-username" // <-- TODO: Add your LinkedIn username
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://twitter.com/your-username" // <-- TODO: Add your X/Twitter username
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
        >
          <FaTwitter />
          <span>Twitter / X</span>
        </a>
      </div>

      {/* --- Contact Form --- */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Send a Direct Message</h2>
        
        {/* --- NEW: Personality-Driven Form Group --- */}
        <div className="form-group">
          <label>What's this about?</label>
          <div className="radio-pill-group">
            <label className="radio-pill-label">
              <input
                type="radio"
                name="reason"
                value="opportunity"
                checked={formData.reason === 'opportunity'}
                onChange={handleChange}
              />
              <span>A project or job opportunity</span>
            </label>
            <label className="radio-pill-label">
              <input
                type="radio"
                name="reason"
                value="strategy"
                checked={formData.reason === 'strategy'}
                onChange={handleChange}
              />
              <span>A technical/strategic question</span>
            </label>
            <label className="radio-pill-label">
              <input
                type="radio"
                name="reason"
                value="philosophy"
                checked={formData.reason === 'philosophy'}
                onChange={handleChange}
              />
              <span>A philosophical 'what if'...</span>
            </label>
            <label className="radio-pill-label">
              <input
                type="radio"
                name="reason"
                value="other"
                checked={formData.reason === 'other'}
                onChange={handleChange}
              />
              <span>Something else entirely</span>
            </label>
          </div>
        </div>

        {/* --- Standard Form Fields (Unchanged) --- */}
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="cta-button primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;