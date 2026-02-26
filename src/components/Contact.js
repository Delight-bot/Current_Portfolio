import React from 'react';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import { FiCalendar } from 'react-icons/fi';
import './Contact.css';

const CONTACT_LINKS = [
  {
    icon: SiGmail,
    color: '#EA4335',
    label: 'Email',
    display: 'dnyanhet@gsumail.gram.edu',
    href: 'mailto:dnyanhet@gsumail.gram.edu',
  },
  {
    icon: SiLinkedin,
    color: '#0A66C2',
    label: 'LinkedIn',
    display: 'linkedin.com/in/delight-nyanhete',
    href: 'https://linkedin.com/in/delight-nyanhete',
    external: true,
  },
  {
    icon: SiGithub,
    color: '#ffffff',
    label: 'GitHub',
    display: 'github.com/Delight-bot',
    href: 'https://github.com/Delight-bot',
    external: true,
  },
  {
    icon: FiCalendar,
    color: '#B8B4AE',
    label: 'Schedule a Coffee Chat',
    display: 'Book a time on Calendly',
    href: 'https://calendly.com/yourlink',
    external: true,
  },
];

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
            {CONTACT_LINKS.map(({ icon: Icon, color, label, display, href, external }) => (
              <a
                key={label}
                className="contact-item"
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="icon-wrapper">
                  <Icon style={{ color }} />
                </div>
                <div className="contact-details">
                  <h3>{label}</h3>
                  <span>{display}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-cta">
            <h3>Open to Opportunities</h3>
            <p>
              I'm actively seeking summer 2026 internships in software engineering,
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
