import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Breath Easy',
      description: 'Privacy-preserving respiratory health prediction app with federated learning',
      techStack: ['React', 'TailwindCSS', 'TensorFlow.js', 'Firebase'],
      github: '#',
      demo: null,
      thumbnail: null,
      details: {
        problem: 'Communities needed real-time respiratory symptom prediction while maintaining user privacy in health data sharing.',
        approach: 'Built TensorFlow.js neural network with federated learning for symptom prediction. Developed React app with real-time AQI tracking and Firebase backend for decentralized storage.',
        outcome: 'Implemented privacy-preserving federated model training with 4-class severity classification using anonymized community data.'
      }
    },
    {
      id: 2,
      title: 'ImpactFlow',
      description: 'Needs-based volunteer matching platform for basic service distribution',
      techStack: ['React', 'TailwindCSS', 'Flask', 'Supabase'],
      github: '#',
      demo: null,
      thumbnail: null,
      details: {
        problem: 'Communities needed an efficient way to match volunteers with beneficiaries while respecting privacy and consent.',
        approach: 'Engineered needs-based matching system using structured user input and preference modeling. Built secure multi-step registration flows with form validation and conditional data capture.',
        outcome: 'Developed admin tools for profile inspection, manual overrides, and privacy-preserving consent workflows to support edge-case interventions.'
      }
    },
    {
      id: 3,
      title: 'ALPFA Connect Platform',
      description: 'Student-professional networking platform with job board features',
      techStack: ['React', 'Node.js', 'Python', 'MySQL'],
      github: '#',
      demo: null,
      thumbnail: null,
      details: {
        problem: 'Students needed a centralized platform to connect with professionals and access job opportunities.',
        approach: 'Built web platform with scalable backend (Python) and responsive frontend (Node.js/React). Implemented job board features and MySQL-based role management.',
        outcome: 'Successfully supported 300+ student-professional connections and streamlined job application flow with mentoring access.'
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
