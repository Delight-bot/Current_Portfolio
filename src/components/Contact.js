import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, collaborations, or just chatting about tech and AI!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon-wrapper">
                <span className="icon">📧</span>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:dnyanhet@gsumail.gram.edu">dnyanhet@gsumail.gram.edu</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <span className="icon">💼</span>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/delight-nyanhete" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/delight-nyanhete
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <span className="icon">💻</span>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/Delight-bot" target="_blank" rel="noopener noreferrer">
                  github.com/Delight-bot
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <span className="icon">📅</span>
              </div>
              <div className="contact-details">
                <h3>Schedule a Coffee Chat</h3>
                <a href="https://calendly.com/yourlink" target="_blank" rel="noopener noreferrer">
                  Book a time on Calendly
                </a>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Open to Opportunities</h3>
            <p>
              I'm actively seeking summer 2026 internships and new grad opportunities in software engineering,
              machine learning, and quantitative analysis. Let's connect if you'd like to collaborate or discuss tech!
            </p>
            <a href="mailto:dnyanhet@gsumail.gram.edu" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
