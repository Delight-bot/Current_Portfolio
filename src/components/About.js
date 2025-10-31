import React from 'react';
import './About.css';

const About = () => {
  const skills = {
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
    frameworks: ['React', 'Node.js', 'Express', 'Django', 'Flask'],
    tools: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL']
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="bio">
            <p>
              Originally from Honde Valley, I'm a software developer passionate about building
              scalable systems that solve real-world problems. Currently pursuing my degree in
              Computer Science, I focus on creating human-centered solutions that make a meaningful impact.
            </p>
            <p>
              My technical interests span full-stack development, machine learning, and cloud computing.
              I'm driven by the challenge of turning complex problems into elegant, efficient solutions.
            </p>
            <p>
              Long-term, I aim to bridge technology and social impact, creating systems that not only
              work efficiently but also serve communities meaningfully.
            </p>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>

            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <div className="skill-tags">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <div className="skill-tags">
                  {skills.frameworks.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-highlight">
            <h3>Current Role</h3>
            <p><strong>2024 – Present:</strong> Research Assistant at Grambling State University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
