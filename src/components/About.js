import React, { useState } from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiHtml5, SiDotnet, SiSwift,
  SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiReact, SiNodedotjs, SiFlask, SiTailwindcss, SiUnity, SiDocker,
  SiGit, SiMysql, SiFirebase, SiSupabase, SiSqlite, SiPostgresql, SiLinux,
  SiOpenai, SiGithub, SiClaude, SiGoogle
} from 'react-icons/si';
import './About.css';

const SKILL_ICONS = {
  'Python':          { icon: SiPython,       color: '#3776AB' },
  'JavaScript':      { icon: SiJavascript,   color: '#F7DF1E' },
  'TypeScript':      { icon: SiTypescript,   color: '#3178C6' },
  'SQL':             { icon: SiSqlite,       color: '#003B57' },
  'HTML/CSS':        { icon: SiHtml5,        color: '#E34F26' },
  'C#':              { icon: SiDotnet,       color: '#512BD4' },
  'Swift':           { icon: SiSwift,        color: '#FA7343' },
  'PyTorch':         { icon: SiPytorch,      color: '#EE4C2C' },
  'TensorFlow':      { icon: SiTensorflow,   color: '#FF6F00' },
  'Scikit-learn':    { icon: SiScikitlearn,  color: '#F7931E' },
  'Pandas':          { icon: SiPandas,       color: '#150458' },
  'NumPy':           { icon: SiNumpy,        color: '#013243' },
  'React':           { icon: SiReact,        color: '#61DAFB' },
  'Node.js':         { icon: SiNodedotjs,    color: '#339933' },
  'Flask':           { icon: SiFlask,        color: '#ffffff' },
  'TailwindCSS':     { icon: SiTailwindcss,  color: '#38BDF8' },
  'Docker':          { icon: SiDocker,       color: '#2496ED' },
  'Unity':           { icon: SiUnity,        color: '#ffffff' },
  'Git':             { icon: SiGit,          color: '#F05032' },
  'PostgreSQL':      { icon: SiPostgresql,   color: '#4169E1' },
  'MySQL':           { icon: SiMysql,        color: '#4479A1' },
  'Firebase':        { icon: SiFirebase,     color: '#FFCA28' },
  'Supabase':        { icon: SiSupabase,     color: '#3ECF8E' },
  'Linux':           { icon: SiLinux,        color: '#FCC624' },
  'AWS':             { icon: null,           color: '#FF9900' },
  'Express':         { icon: null,           color: '#ffffff' },
  'GitHub Copilot':  { icon: SiGithub,       color: '#ffffff' },
  'ChatGPT':         { icon: SiOpenai,       color: '#00A67E' },
  'Claude':          { icon: SiClaude,        color: '#D4856A' },
  'Google Stitch':   { icon: SiGoogle,        color: '#4285F4' },
};

const CATEGORY_LABELS = {
  languages:   'Languages',
  frameworks:  'Frameworks',
  tools:       'Tools & DBs',
  mlLibraries: 'ML / AI',
  aiTools:     'AI Tools',
};

const About = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const skills = {
    languages:   ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS', 'C#', 'Swift'],
    frameworks:  ['React', 'Node.js', 'Express', 'Flask', 'TailwindCSS', 'Docker'],
    tools:       ['Git', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'Linux', 'AWS'],
    mlLibraries: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    aiTools:     ['GitHub Copilot', 'ChatGPT', 'Claude', 'Google Stitch'],
  };

  // Build flat ticker items: [label, ...skills, divider, label, ...skills, divider, ...]
  const tickerGroups = Object.entries(skills).map(([key, items]) => ({ key, label: CATEGORY_LABELS[key], items }));

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* ── Intro: headshot + bio ── */}
          <div className="about-intro">
            <div className="headshot-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/Delight_Headshot.jpg`}
                alt="Delight Nyanhete"
                className="headshot-img"
              />
            </div>
            <div className="bio">
              <p>
                Hi, my name is Delight, and I am a Computer Science student at Grambling State University.
                I love building products that make users happy and solving real problems with AI and machine learning.
              </p>
              <p>
                I really enjoy the moment when I combine math and code, when numbers and syntax come together
                and an idea starts to work in real life.
              </p>
            </div>
          </div>

          {/* ── Skills Ticker ── */}
          <div className="skills-section">
            <div className="skills-header">
              <h3>Technical Skills</h3>
              <button
                className="ticker-stop-btn"
                onClick={() => setIsPlaying(p => !p)}
                title={isPlaying ? 'Pause' : 'Resume'}
              >
                {isPlaying ? '⏸ Stop' : '▶ Animate'}
              </button>
            </div>

            {isPlaying ? (
              /* ── Ticker mode ── */
              <div className="ticker-outer">
                <div className="ticker-track">
                  {[0, 1].map(copy =>
                    tickerGroups.map(({ key, label, items }) => (
                      <div key={`${key}-${copy}`} className="ticker-group">
                        <span className="ticker-label">{label}</span>
                        {items.map(skill => {
                          const entry = SKILL_ICONS[skill];
                          const Icon = entry?.icon;
                          return (
                            <span key={skill} className="ticker-skill">
                              {Icon && <Icon style={{ color: entry.color }} />}
                              {skill}
                            </span>
                          );
                        })}
                        <span className="ticker-sep">◆</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              /* ── Static grid mode ── */
              <div className="skills-grid">
                {tickerGroups.map(({ key, label, items }) => (
                  <div key={key} className="skill-category">
                    <h4>{label}</h4>
                    <div className="skill-tags">
                      {items.map(skill => {
                        const entry = SKILL_ICONS[skill];
                        const Icon = entry?.icon;
                        return (
                          <span key={skill} className="skill-tag">
                            {Icon && <Icon style={{ color: entry.color }} />}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
