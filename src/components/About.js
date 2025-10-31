import React from 'react';
import './About.css';

const About = () => {
  const skills = {
    languages: ['Python', 'JavaScript', 'SQL', 'HTML/CSS', 'C#', 'Swift'],
    mlLibraries: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Seaborn'],
    frameworks: ['React', 'Node.js', 'Flask', 'TailwindCSS', 'Unity'],
    tools: ['Git', 'MySQL', 'Firebase', 'Supabase']
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="bio">
            <p>
              I'm a Computer Science student at Grambling State University with a 4.0 GPA, passionate about
              leveraging AI and machine learning to solve real-world problems. My experience spans across
              top-tier programs including MIT FutureMakers, Apple's Arise and Shine Bootcamp, and the
              Texas Advanced Computing Center.
            </p>
            <p>
              I specialize in developing intelligent systems using deep learning, full-stack development,
              and data science. From building plant disease detection models with 95%+ accuracy to creating
              campus wellness platforms, I focus on creating solutions that blend technical excellence with
              meaningful social impact.
            </p>
            <p>
              Currently, I'm a Quantitative Analysis Fellow at Citi Markets and an AI Studio Fellow at
              Break Through Tech AI, where I continue to push the boundaries of what's possible with
              technology while making it accessible to everyone.
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
                <h4>ML/AI Libraries</h4>
                <div className="skill-tags">
                  {skills.mlLibraries.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Frameworks & Tools</h4>
                <div className="skill-tags">
                  {skills.frameworks.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Databases</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-highlight">
            <h3>Education</h3>
            <p><strong>Grambling State University</strong></p>
            <p>Bachelor of Science in Computer Science | GPA: 4.0 | Expected December 2027</p>
            <p><em>Relevant Coursework:</em> Data Structures and Algorithms, Software Engineering,
            Artificial Intelligence, Computer Architecture, Multivariable Calculus, Statistics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
