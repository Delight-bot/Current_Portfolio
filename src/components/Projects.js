import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A scalable web application for managing tasks',
      techStack: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project-one',
      demo: 'https://project-one-demo.com',
      thumbnail: null,
      details: {
        problem: 'Users needed a simple yet powerful task management system that syncs across devices.',
        approach: 'Built a full-stack application with real-time sync using WebSockets and MongoDB change streams.',
        outcome: 'Successfully deployed with 100+ active users and 99.9% uptime.'
      }
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Machine learning model for sentiment analysis',
      techStack: ['Python', 'TensorFlow', 'Flask'],
      github: 'https://github.com/yourusername/project-two',
      demo: null,
      thumbnail: null,
      details: {
        problem: 'Businesses needed automated sentiment analysis for customer feedback.',
        approach: 'Trained a neural network on 50K labeled reviews, deployed as REST API.',
        outcome: 'Achieved 89% accuracy with sub-second response times.'
      }
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Mobile-first e-commerce platform',
      techStack: ['React Native', 'Firebase', 'Stripe'],
      github: 'https://github.com/yourusername/project-three',
      demo: 'https://project-three-demo.com',
      thumbnail: null,
      details: {
        problem: 'Small businesses lacked affordable mobile commerce solutions.',
        approach: 'Created a customizable mobile storefront with secure payment processing.',
        outcome: 'Reduced development time by 60% compared to native apps.'
      }
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Data visualization dashboard for analytics',
      techStack: ['D3.js', 'React', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project-four',
      demo: 'https://project-four-demo.com',
      thumbnail: null,
      details: {
        problem: 'Teams struggled to understand complex datasets quickly.',
        approach: 'Built interactive visualizations with real-time data updates.',
        outcome: 'Reduced decision-making time by 40% for stakeholders.'
      }
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'Cloud-based file sharing system',
      techStack: ['AWS S3', 'Lambda', 'React'],
      github: 'https://github.com/yourusername/project-five',
      demo: null,
      thumbnail: null,
      details: {
        problem: 'Organizations needed secure, scalable file sharing.',
        approach: 'Leveraged AWS serverless architecture for automatic scaling.',
        outcome: 'Handles 10K+ daily uploads with 99.99% reliability.'
      }
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              {project.thumbnail && (
                <div className="project-thumbnail">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <h2>{selectedProject.title}</h2>

              <div className="modal-section">
                <h3>Problem</h3>
                <p>{selectedProject.details.problem}</p>
              </div>

              <div className="modal-section">
                <h3>Approach</h3>
                <p>{selectedProject.details.approach}</p>
              </div>

              <div className="modal-section">
                <h3>Outcome</h3>
                <p>{selectedProject.details.outcome}</p>
              </div>

              <div className="modal-section">
                <h3>Tech Stack</h3>
                <div className="tech-stack">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
