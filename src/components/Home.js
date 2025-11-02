import React from 'react';
import './Home.css';
import heroImage from './givesisters2.jpg';

const Home = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const sectionStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section id="home" className="home-section" style={sectionStyle}>
      <div className="hero-overlay"></div>
      <div className="home-content">
        <h1 className="name">
          <span className="name-intro">Delighted to meet you</span>
          <span className="name-reveal">Delight Nyanhete</span>
        </h1>
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
