import React, { useState, useEffect } from 'react';
import './Home.css';

const SLIDES = Array.from({ length: 8 }, (_, i) =>
  `${process.env.PUBLIC_URL}/CS${i + 1}.png`
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="letter" style={{ '--i': index }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section id="home" className="home-section">
      {/* ── Slideshow ── */}
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${currentSlide * (100 / SLIDES.length)}%)` }}
      >
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className="slide"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>
      <div className="home-content">
        <h1 className="name">
          <span className="name-intro">
            {splitText('Delighted to meet you')}
          </span>
          <span className="name-reveal">Delight Nyanhete</span>
        </h1>
        <p className="tagline">
          CS Student & AI/ML Engineer | Building intelligent solutions that make an impact
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View Projects
          </button>
          <a
          href={`${process.env.PUBLIC_URL}/Delight_Nyanhete_Resume.pdf`}
          className="btn btn-secondary" 
          download="Delight_Nyanhete_Resume.pdf"
>
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
