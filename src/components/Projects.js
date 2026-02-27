import React, { useState, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiTensorflow, SiFirebase, SiVite, SiFastapi, SiPython,
  SiNodedotjs, SiMysql, SiGooglegemini, SiDocker, SiPostgresql,
  SiSupabase, SiOpenai, SiExpo, SiSqlite, SiAnthropic
} from 'react-icons/si';
import './Projects.css';

const TECH_ICONS = {
  'Next.js':          { icon: SiNextdotjs,    color: '#ffffff' },
  'React':            { icon: SiReact,        color: '#61DAFB' },
  'React Native':     { icon: SiReact,        color: '#61DAFB' },
  'TypeScript':       { icon: SiTypescript,   color: '#3178C6' },
  'Tailwind CSS':     { icon: SiTailwindcss,  color: '#38BDF8' },
  'TailwindCSS':      { icon: SiTailwindcss,  color: '#38BDF8' },
  'Google Gemini AI': { icon: SiGooglegemini, color: '#8E75B2' },
  'TensorFlow.js':    { icon: SiTensorflow,   color: '#FF6F00' },
  'Firebase':         { icon: SiFirebase,     color: '#FFCA28' },
  'Vite':             { icon: SiVite,         color: '#646CFF' },
  'FastAPI':          { icon: SiFastapi,      color: '#009688' },
  'Python':           { icon: SiPython,       color: '#3776AB' },
  'Node.js':          { icon: SiNodedotjs,    color: '#339933' },
  'MySQL':            { icon: SiMysql,        color: '#4479A1' },
  'Docker':           { icon: SiDocker,       color: '#2496ED' },
  'PostgreSQL':       { icon: SiPostgresql,   color: '#4169E1' },
  'Supabase':         { icon: SiSupabase,     color: '#3ECF8E' },
  'OpenAI API':       { icon: SiOpenai,       color: '#00A67E' },
  'Expo':             { icon: SiExpo,         color: '#000020' },
  'SQLite':           { icon: SiSqlite,       color: '#003B57' },
  'Anthropic':        { icon: SiAnthropic,    color: '#C47A5A' },
};

const TechBadge = ({ tech }) => {
  const entry = TECH_ICONS[tech];
  const Icon  = entry?.icon;
  return (
    <span className="tech-badge" title={tech}>
      {Icon && <Icon style={{ color: entry.color, flexShrink: 0 }} />}
      <span>{tech}</span>
    </span>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewProject, setPreviewProject]   = useState(null);
  const [flippingCard, setFlippingCard]       = useState(null);
  const [cracksCard, setCracksCard]           = useState(null);
  const [shatterCard, setShatterCard]         = useState(null);
  const gridRef                               = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Sentiments : AI Motivational Video Platform',
      description: 'Modular AI pipeline that generates personalized motivational videos across 29 languages using LLM inference, avatar synthesis, and cloud infrastructure',
      techStack: ['React', 'React Native', 'TypeScript', 'Docker', 'PostgreSQL', 'Expo'],
      github: '#',
      liveUrl: null,
      details: {
        problem: 'People needed personalized motivational content in their native language, delivered through AI-generated video with natural voice and avatar presentation.',
        approach: 'Built a modular AI pipeline coordinating LLM inference and media services. Designed TypeScript provider abstractions for avatar and voice pipelines. Deployed containerized backend to AWS ECS with S3 for media storage and RDS (PostgreSQL) for persistence.',
        outcome: 'Delivered multilingual AI video generation across 29 languages with scalable cloud infrastructure, reducing pipeline integration time through clean provider abstractions.'
      }
    },
    {
      id: 2,
      title: 'Breath Easy',
      description: 'Privacy-preserving respiratory health prediction app with federated learning',
      techStack: ['React', 'TailwindCSS', 'TensorFlow.js', 'Firebase'],
      github: '#',
      liveUrl: 'https://6982f1f70270c0000797184f--breathealot.netlify.app/',
      details: {
        problem: 'Communities needed real-time respiratory symptom prediction while maintaining user privacy in health data sharing.',
        approach: 'Built TensorFlow.js neural network with federated learning for symptom prediction. Developed React app with real-time AQI tracking and Firebase backend for decentralized storage.',
        outcome: 'Implemented privacy-preserving federated model training with 4-class severity classification using anonymized community data.'
      }
    },
    {
      id: 3,
      title: 'ImpactFlow',
      description: 'Privacy-focused volunteer matching platform connecting volunteers with people needing assistance across 9 assistance categories',
      techStack: ['React', 'Tailwind CSS', 'Vite', 'FastAPI', 'Python'],
      github: 'https://github.com/Delight-bot/impactflow',
      liveUrl: 'https://letsimpact.netlify.app/',
      details: {
        problem: 'Communities needed an efficient way to match volunteers with beneficiaries while maintaining anonymity, dignity, and administrative oversight.',
        approach: 'Built with React 18, Vite, and FastAPI. Implemented three-role system with secure messaging and admin oversight.',
        outcome: 'Developed privacy-preserving platform supporting 9 assistance categories with role-based access and administrative tools.'
      }
    },
    {
      id: 4,
      title: 'TAPIA 2025 Conference Assistant',
      description: 'AI-powered calendar application for managing conference schedules with intelligent recommendations and automated conflict resolution',
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Gemini AI'],
      github: 'https://github.com/Delight-bot/TAPIA2025-Conference-Assistant',
      liveUrl: null,
      details: {
        problem: 'Conference attendees needed an intelligent way to manage their schedule with personalized event recommendations and automatic conflict resolution.',
        approach: 'Built with Next.js 15, React 19, and TypeScript. Integrated Google Gemini 2.5 Flash API for AI-powered event suggestions and smart scheduling.',
        outcome: 'Created responsive conference assistant supporting real TAPIA 2025 schedule with personalized recommendations, conflict detection, and AI-powered schedule optimization.'
      }
    },
    {
      id: 5,
      title: 'Morgan Stanley x ALPFA Connect',
      description: 'Role-based student-professional networking platform with job listings, mentorship access, and admin oversight',
      techStack: ['React', 'Node.js', 'Python', 'MySQL', 'TailwindCSS'],
      github: '#',
      liveUrl: null,
      details: {
        problem: 'Students needed a centralized platform to connect with professionals and access job opportunities through mentorship and career development tools.',
        approach: 'Built a role-based platform with authentication, profile management, job listings, and admin oversight using Python backend and React/Node.js frontend with MySQL for data management.',
        outcome: 'Successfully supported student-professional connections with structured mentorship access and streamlined job application flow.'
      }
    },
    {
      id: 6,
      title: 'Zamani Food Reservation & Accessibility App',
      description: 'Hackathon MVP: real-time surplus meal reservations with an AI assistant powered by retrieval-augmented generation (Amazon x CodePath)',
      techStack: ['React', 'TailwindCSS', 'OpenAI API', 'Supabase'],
      github: '#',
      liveUrl: null,
      details: {
        problem: 'Food waste from surplus meals and lack of accessible dietary guidance left many without options, especially users with specific dietary needs.',
        approach: 'Built full-stack MVP with real-time surplus-meal reservations, filtering, and live availability updates. Integrated an AI assistant ("Chefie") using RAG — vector search over food listings with the OpenAI API to ground dietary guidance.',
        outcome: 'Delivered a working hackathon MVP reducing food waste through real-time reservations while providing accessible, hallucination-reduced AI dietary guidance.'
      }
    },
    {
      id: 7,
      title: 'Protein Sequence Classification ML Pipeline',
      description: 'End-to-end ML pipeline classifying protein sequences into 10 functional categories using ensemble models and biological feature engineering',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      github: '#',
      liveUrl: null,
      details: {
        problem: 'Biological researchers needed an automated way to classify large volumes of protein sequences into functional categories without manual annotation.',
        approach: 'Engineered 76 biological features from 35,000+ protein sequences. Trained Logistic Regression, Random Forest, and Gradient Boosting models, optimized with Grid Search and cross-validation. Implemented stratified data splits and model serialization for reproducibility.',
        outcome: 'Built a full end-to-end ML pipeline classifying sequences into 10 functional categories with complete evaluation metrics and production-ready model serialization.'
      }
    },
    {
      id: 8,
      title: 'StudeyMate : Multi-LLM Study Tool',
      description: 'Full-stack AI study tool that routes questions to up to 5 LLMs simultaneously and learns your per-subject preferences over time',
      techStack: ['FastAPI', 'Python', 'React', 'Vite', 'SQLite', 'OpenAI API', 'Anthropic'],
      github: '#',
      liveUrl: null,
      details: {
        problem: 'Students using multiple AI tools had no way to compare responses side-by-side, identify which model excels per subject, or detect hallucinations across models.',
        approach: 'Built a FastAPI backend that fans queries out to up to 5 LLMs in parallel (GPT-4, Claude, Gemini, DeepSeek, Llama) with adaptive per-user prompt rewriting. Implemented subject profiling — after 10+ interactions with >85% preference confidence the system auto-recommends the preferred LLM. Added hallucination detection by cross-comparing responses across models, and a response fusion layer to synthesize the best parts of multiple answers. React + Vite frontend with SQLite for persistence.',
        outcome: 'Delivered a full-stack study platform with multi-LLM routing, auto-scoring on clarity/depth/formatting, hallucination flagging, response fusion, and a dashboard visualizing win rates and LLM preferences per subject.'
      }
    },
    {
      id: 9,
      title: 'Return to Sender',
      description: 'Recover stolen artifacts before the museum opens… but beware, something\'s lurking.',
      techStack: ['C#'],
      github: 'https://github.com/aureliemagloire/Final-Prototype',
      liveUrl: null,
      isGame: true,
      gif: `${process.env.PUBLIC_URL}/Heist.gif`,
      details: {
        problem: 'Players needed an immersive after-hours museum experience combining puzzle mechanics with stealth and atmosphere.',
        approach: 'Developed in Unity with C#. Players navigate a museum after hours, solve puzzles, and return artifacts to their rightful places — all while avoiding mysterious entities called Echoes.',
        outcome: 'Delivered a functional Unity prototype with puzzle mechanics, stealth gameplay, and an atmospheric museum environment.'
      }
    },
    {
      id: 10,
      title: 'Catch the Bus!',
      description: 'Late for work? Catch the bus before it\'s too late!',
      techStack: ['C#'],
      github: 'https://github.com/Delight-bot/Clicker_ClickerGame',
      liveUrl: null,
      isGame: true,
      gif: `https://i.imgur.com/G4WPezV.gif`,
      details: {
        problem: 'Players needed a fast-paced arcade experience built around speed, timing, and split-second decision-making.',
        approach: 'Built a clicker-style board/arcade game where the player controls a running character chasing a moving bus, jumping over obstacles and collecting coins — but beware, trash slows you down and costs you cash!',
        outcome: 'Delivered an engaging arcade game with obstacle mechanics, coin collecting, and a dynamic scoring system.'
      }
    },
    {
      id: 11,
      title: 'Gravity Grid : Connect Four',
      description: 'Two-player Connect Four where discs fall under gravity — first to align four wins.',
      techStack: ['Python'],
      github: '#',
      liveUrl: null,
      isGame: true,
      gif: `${process.env.PUBLIC_URL}/Python_Game1.gif`,
      details: {
        problem: 'Needed a faithful digital Connect Four with smooth gravity physics, a reliable win-state checker across all four directions, and clean turn management.',
        approach: 'Built with Python and Pygame using an OOP/MVC architecture. A 6×7 matrix drives the model layer — disc drops find the lowest available row via gravity logic. The win checker scans horizontal, vertical, and both diagonals. A toggle system manages turns and locks input during animations.',
        outcome: 'Delivered a fully playable two-player Connect Four with real-time disc rendering, four-directional win detection, and smooth animated drops.'
      }
    },
    {
      id: 12,
      title: 'Mancala 3D',
      description: 'A 32-hole 3D Mancala built in Python — a deep dive into object-oriented design.',
      techStack: ['Python'],
      github: '#',
      liveUrl: null,
      isGame: true,
      gif: `${process.env.PUBLIC_URL}/Pythongame2.gif`,
      details: {
        problem: 'Wanted to sharpen OOP fundamentals by modeling a complex turn-based board game with shared state, capture rules, and 3D spatial representation.',
        approach: 'Implemented Mancala with 32 holes in a 3D layout entirely in Python, using OOP principles to separate board state, game rules, and player logic into distinct, reusable classes.',
        outcome: 'Produced a working 3D Mancala engine with full rule enforcement, demonstrating clean class design and structured state management.'
      }
    }
  ];

  const handleDetailsClick = (project) => {
    if (flippingCard !== null) return;

    // Destroy VanillaTilt on this card so it stops fighting the flip transform
    const wrapper = gridRef.current?.querySelector(`[data-id="${project.id}"]`);
    wrapper?.vanillaTilt?.destroy();
    if (wrapper) {
      wrapper.style.transform = '';   // clear leftover inline transform
      wrapper.style.willChange = '';  // clear will-change so GPU layer doesn't block backface-visibility
    }

    setFlippingCard(project.id);
    setTimeout(() => setCracksCard(project.id), 750);
    setTimeout(() => setShatterCard(project.id), 1150);
    setTimeout(() => {
      setFlippingCard(null);
      setCracksCard(null);
      setShatterCard(null);
      setSelectedProject(project);
      // Re-init VanillaTilt after animation
      if (wrapper) {
        VanillaTilt.init([wrapper], { max: 12, speed: 500, glare: false, scale: 1.04, perspective: 800 });
      }
    }, 1700);
  };

  // Scroll-in reveal
  useEffect(() => {
    const reveals = document.querySelectorAll('.card-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 120);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // VanillaTilt
  useEffect(() => {
    const wrappers = gridRef.current?.querySelectorAll('.tilt-wrapper');
    if (!wrappers) return;
    VanillaTilt.init(Array.from(wrappers), {
      max: 12, speed: 500, glare: false, scale: 1.04, perspective: 800,
    });
    return () => wrappers.forEach(w => w.vanillaTilt?.destroy());
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project) => (
            <div key={project.id} className="card-reveal">
              <div className="tilt-wrapper" data-id={project.id}>

                {project.isDualGame ? (
                  <div className="project-card dual-game-card">
                    <div className="dual-games">
                      {project.games.map((game, i) => (
                        <div key={i} className="dual-game-panel">
                          <div className="game-placeholder"><span>GAME</span></div>
                          <div className="dual-game-info">
                            <h3>{game.name}</h3>
                            <div className="project-links">
                              {game.github !== '#' && (
                                <a href={game.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                              )}
                              {game.build !== '#' && (
                                <a href={game.build} target="_blank" rel="noopener noreferrer">Play ↗</a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className={`card-flip-inner${flippingCard === project.id ? ' is-flipped' : ''}`}>
                    {/* Front face */}
                    <div className="card-flip-front">
                      <div className="project-card">
                        {project.isGame && (
                          project.gif ? (
                            <div className="game-gif-wrapper">
                              <img src={project.gif} alt={project.title} className="game-gif" />
                            </div>
                          ) : (
                            <div className="game-placeholder"><span>GAME</span></div>
                          )
                        )}
                        <div className="project-content">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <div className="tech-stack">
                            {project.techStack.map((tech, i) => (
                              <TechBadge key={i} tech={tech} />
                            ))}
                          </div>
                          <div className="project-links">
                            {project.github && project.github !== '#' && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                              </a>
                            )}
                            {project.liveUrl && (
                              <button
                                className="preview-btn"
                                onClick={() => setPreviewProject(project)}
                              >
                                Preview ↗
                              </button>
                            )}
                            <button
                              className="details-btn"
                              onClick={() => handleDetailsClick(project)}
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ice back face */}
                    <div className="card-flip-back">
                      <div className="ice-card">
                        <div className="ice-frost-bg" />
                        <div className="ice-crystals" />
                        <div className="ice-content">
                          <div className="ice-snowflake">❄</div>
                          <p className="ice-frozen-title">{project.title}</p>
                        </div>
                        <svg
                          className={`ice-cracks${cracksCard === project.id ? ' cracks-visible' : ''}`}
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path className="crack crack-1" d="M50,48 L25,15 L10,28 L5,12" />
                          <path className="crack crack-2" d="M50,48 L78,12 L90,25 L95,8" />
                          <path className="crack crack-3" d="M50,48 L15,68 L5,85" />
                          <path className="crack crack-4" d="M50,48 L88,72 L95,60" />
                          <path className="crack crack-5" d="M50,48 L52,88 L42,100" />
                          <path className="crack crack-6" d="M50,48 L32,38 L18,45" />
                          <path className="crack crack-7" d="M50,48 L68,38 L85,42" />
                        </svg>
                        {shatterCard === project.id && (
                          <div className="ice-shatter-overlay">
                            {[0,1,2,3,4,5,6,7].map(i => (
                              <div key={i} className={`shard shard-${i}`} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <span className="edge edge-right"></span>
                <span className="edge edge-left"></span>
                <span className="edge edge-top"></span>
                <span className="edge edge-bottom"></span>

              </div>
            </div>
          ))}
        </div>

        {/* ── Preview modal ── */}
        {previewProject && (
          <div className="modal-overlay" onClick={() => setPreviewProject(null)}>
            <div className="preview-modal" onClick={e => e.stopPropagation()}>
              <div className="preview-modal-header">
                <span className="preview-modal-title">{previewProject.title}</span>
                <a
                  href={previewProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Visit ↗
                </a>
                <button className="modal-close" onClick={() => setPreviewProject(null)}>&times;</button>
              </div>
              <div className="preview-modal-body">
                <iframe
                  src={previewProject.liveUrl}
                  title={`${previewProject.title} preview`}
                  className="preview-modal-frame"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Details modal ── */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
              <h2>{selectedProject.title}</h2>
              <div className="modal-section"><h3>Problem</h3><p>{selectedProject.details.problem}</p></div>
              <div className="modal-section"><h3>Approach</h3><p>{selectedProject.details.approach}</p></div>
              <div className="modal-section"><h3>Outcome</h3><p>{selectedProject.details.outcome}</p></div>
              <div className="modal-section">
                <h3>Tech Stack</h3>
                <div className="tech-stack">
                  {selectedProject.techStack.map((tech, i) => <TechBadge key={i} tech={tech} />)}
                </div>
              </div>
              <div className="modal-links">
                {selectedProject.github && selectedProject.github !== '#' && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Site</a>
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
