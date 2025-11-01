import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const events = [
    {
      title: 'AfroTech 2024',
      location: 'Austin, TX',
      description: 'Networked with tech leaders and attended cutting-edge sessions on AI and innovation',
      image: null // Placeholder for actual image path
    },
    {
      title: 'HBCU First Summit 2023',
      location: 'Virtual',
      description: 'Leadership development and networking with HBCU tech community',
      image: null
    },
    {
      title: 'IBM Virtual Certification Seminar',
      location: 'Virtual',
      description: 'Completed cloud computing certification and hands-on training',
      image: null
    },
    {
      title: 'Oak Ridge ORISE Briefing',
      location: 'Remote',
      description: 'Research opportunities in national laboratories and cutting-edge science',
      image: null
    },
    {
      title: 'ACM Tech Conference',
      location: 'Campus',
      description: 'Organized and presented on modern web development practices',
      image: null
    },
    {
      title: 'CodePath Demo Day',
      location: 'Virtual',
      description: 'Showcased capstone project to industry professionals and peers',
      image: null
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Conferences & Events</h2>
        <p className="gallery-intro">
          Intellectual quest and travel
        </p>

        <div className="gallery-grid">
          {events.map((event, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-image">
                {event.image ? (
                  <img src={event.image} alt={event.title} />
                ) : (
                  <div className="placeholder-image">
                    <span>{event.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="gallery-info">
                <h3>{event.title}</h3>
                <p className="location">{event.location}</p>
                <p className="description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
