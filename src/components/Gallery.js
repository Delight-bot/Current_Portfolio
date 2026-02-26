import React, { useState } from 'react';
import './Gallery.css';

const events = [
  {
    id: 1,
    title: 'PEARC',
    location: 'Columbus, Ohio',
    image: `${process.env.PUBLIC_URL}/Gallery1.png`,
  },
  {
    id: 2,
    title: 'ColorStack',
    location: 'San Francisco',
    image: `${process.env.PUBLIC_URL}/Gallery2.png`,
  },
  {
    id: 3,
    title: 'TAPIA',
    location: 'Dallas, Texas',
    image: `${process.env.PUBLIC_URL}/Gallery3.png`,
  },
  {
    id: 4,
    title: 'USRSE',
    location: 'Pennsylvania',
    image: `${process.env.PUBLIC_URL}/Gallery4.png`,
  },
  {
    id: 5,
    title: 'Code2040',
    location: 'Detroit',
    image: `${process.env.PUBLIC_URL}/Gallery5.png`,
  },
];

const GalleryCard = ({ event }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="gallery-card">
      <div className="gallery-image">
        {!imgFailed ? (
          <img
            src={event.image}
            alt={event.title}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="placeholder-image">
            <span>{event.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="gallery-info">
        <h3>{event.title}</h3>
        <p className="location">{event.location}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Conferences & Events</h2>
        <p className="gallery-intro">Intellectual quest and travel</p>

        <div className="gallery-grid">
          {events.map(event => (
            <GalleryCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
