import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          About <span className="text-neon">Me</span>
        </h2>
        
        <div className="about-content">

          <div className="about-text glass-panel animate-on-scroll">
            <p>
              I'm <strong>Akshaya Kumar Sahoo</strong>, a Backend Developer and Computer Science student at 
              Lovely Professional University. I specialize in building <span className="text-highlight">scalable APIs, 
              real-time systems, and high-performance backend architectures</span>.
            </p>

            <p>
              I have hands-on experience working with technologies like 
              <span className="text-highlight"> Node.js, Express, PostgreSQL, Redis, and AWS</span>, 
              where I focus on performance optimization, system design, and writing clean, maintainable code.
            </p>

            <p>
              I actively strengthen my problem-solving skills by solving 
              <span className="text-highlight"> Data Structures and Algorithms</span> problems and applying 
              them in real-world backend projects. I enjoy tackling challenges related to scalability, 
              concurrency, and system efficiency.
            </p>

            <p>
              My goal is to grow into a strong backend engineer who can design systems that are 
              not only functional but also <span className="text-highlight">efficient, reliable, and production-ready</span>.
            </p>
          </div>

          <div className="about-stats animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            
            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">450+</h3>
              <p className="stat-label">DSA Problems Solved</p>
            </div>

            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">10k+</h3>
              <p className="stat-label">Concurrent Requests Handled</p>
            </div>

            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">40%</h3>
              <p className="stat-label">Latency Reduction</p>
            </div>

            <div className="stat-card glass-panel">
              <h3 className="stat-number text-neon">4+</h3>
              <p className="stat-label">Major Backend Projects</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;