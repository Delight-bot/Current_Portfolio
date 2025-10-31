import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Quantitative Analysis Fellow',
      organization: 'Citi Markets',
      date: 'September 2025 – Present',
      description: 'Advanced financial modeling and quantitative analysis',
      details: [
        '1 of 10 fellows in the Quantitative Analysis track',
        'Working alongside trading and quant teams on advanced financial modeling'
      ]
    },
    {
      role: 'AI Studio Fellow',
      organization: 'Break Through Tech AI | Cornell Machine Learning Foundations Certificate',
      date: 'May 2025 – Present',
      description: 'Machine learning engineering with industry partner',
      details: [
        'Developing regression models with Accenture to predict pump failures using synthetic sensor data',
        'Reducing unplanned downtime through predictive maintenance models'
      ]
    },
    {
      role: 'Fellow',
      organization: 'Microsoft Emerging Leaders in Security',
      date: 'July 2025 - Present',
      description: 'Cybersecurity and career development',
      details: [
        'Selected from 1,300+ applicants for intensive Microsoft-led security program',
        'Exploring cybersecurity, career navigation, and mentorship opportunities'
      ]
    },
    {
      role: 'App & Software Development Fellow',
      organization: 'Apple | Arise and Shine Bootcamp',
      date: 'May - July 2025',
      description: 'Campus wellness platform development',
      details: [
        'Designed BloomSpace, a campus wellness platform for neurodivergent students',
        'Built A* routing algorithm in Node.js to help students navigate low-crowd paths',
        'Embedded faculty-student check-ins and health tracking modules for personalized support'
      ]
    },
    {
      role: 'Advanced Computing Student Challenge',
      organization: 'Texas Advanced Computing Center',
      date: 'May - July 2025',
      description: 'Machine learning for healthcare analytics',
      details: [
        'Developed logistic regression and random forest models to identify Alzheimer\'s risk factors',
        'Validated model generalization across demographic regions, achieving 83% early-stage screening accuracy',
        'Built user-friendly frontend improving accessibility of medical ML insights for non-technical users'
      ]
    },
    {
      role: 'Game Development Fellow',
      organization: 'Activision x EICOP Program',
      date: 'June - July 2025',
      description: 'Unity-based game development',
      details: [
        'Delivered 5 Unity-based games using C# by leading a team of 3 in story-driven game design',
        'Increased user engagement metrics in demos by 40%',
        'Strengthened C# skills through gameplay mechanics development and iterative design reviews'
      ]
    },
    {
      role: 'AI & Deep Learning Fellow',
      organization: 'MIT FutureMakers Program',
      date: 'June - August 2024',
      description: 'Agricultural AI and computer vision',
      details: [
        'Built plant disease detection system using VGG16 and CNN models on 160K+ images, achieving 95%+ accuracy',
        'Built TinyBERT-based model to suggest plant disease treatments',
        'Developed interactive map-based UI integrating ML predictions for real-time crop health visualization'
      ]
    },
    {
      role: 'Executive Board Member',
      organization: 'ACM Chapter, Grambling State University',
      date: 'May 2024 – Present',
      description: 'Chapter leadership and growth',
      details: [
        'Revived the chapter and increased membership by 50%',
        'Launched biweekly events, panels, and hackathons for student engagement'
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
