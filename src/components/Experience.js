import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Student Research Assistant',
      organization: 'Grambling State University',
      date: '2024 – Present',
      description: 'NLP-powered diagnostic research',
      details: [
        'Developing natural language processing models for medical diagnostics',
        'Collaborating with faculty on research publications',
        'Analyzing large datasets for pattern recognition'
      ]
    },
    {
      role: 'Executive Board Member',
      organization: 'ACM Chapter',
      date: '2024 – Present',
      description: 'Organized developer study groups',
      details: [
        'Led weekly coding workshops and tech talks',
        'Coordinated hackathons and coding competitions',
        'Mentored junior students in software development'
      ]
    },
    {
      role: 'Software Engineering Fellow',
      organization: 'CodePath',
      date: 'Summer 2024',
      description: 'Completed Intermediate Software Engineering Track',
      details: [
        'Mastered advanced algorithms and data structures',
        'Built full-stack applications using modern frameworks',
        'Collaborated on team projects with industry mentors'
      ]
    },
    {
      role: 'Technical Workshop Participant',
      organization: 'HBCU First',
      date: '2023 – 2024',
      description: 'Leadership and technical development',
      details: [
        'Participated in executive leadership programs',
        'Networked with tech industry professionals',
        'Developed soft skills for tech leadership roles'
      ]
    },
    {
      role: 'Virtual Intern',
      organization: 'IBM / Oak Ridge ORISE',
      date: '2024',
      description: 'Cloud computing and enterprise systems',
      details: [
        'Gained hands-on experience with cloud infrastructure',
        'Completed IBM certification programs',
        'Worked on enterprise-level software solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="date">{exp.date}</span>
                </div>
                <h4>{exp.organization}</h4>
                <p className="description">{exp.description}</p>
                <ul className="details-list">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
