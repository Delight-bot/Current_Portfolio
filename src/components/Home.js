import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="name">Delight Nyanhete</h1>
        <p className="tagline">
          CS Student & AI/ML Engineer | Building intelligent solutions that make an impact
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
