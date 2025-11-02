import React from 'react';
import './Home.css';
import heroImage from './givesisters2.jpg';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const sectionStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(255, 107, 107, 0.85) 0%, rgba(255, 217, 61, 0.85) 100%), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section id="home" className="home-section" style={sectionStyle}>
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
