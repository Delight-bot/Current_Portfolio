import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-intro">
          Let's connect and build something meaningful.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon-wrapper">
                <span className="icon">📧</span>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <span className="icon">💼</span>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <span className="icon">💻</span>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
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
              I'm currently seeking internships and full-time opportunities in software engineering.
              Feel free to reach out if you'd like to collaborate or just chat about tech!
            </p>
            <a href="mailto:your.email@example.com" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
