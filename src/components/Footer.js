import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="built-with">
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
