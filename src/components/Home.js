import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="name">Your Name</h1>
        <p className="tagline">
          Software Developer focused on scalable systems and human-centered solutions.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View Projects
          </button>
          <a href="/resume.pdf" className="btn btn-secondary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
