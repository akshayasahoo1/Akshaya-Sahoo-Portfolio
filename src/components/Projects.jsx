import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce AI Support Agent',
      date: "Jan '26 - Mar '26",
      role: 'Backend + GenAI Developer',
      description: "Built an AI-powered support agent using LangChain and OpenAI with tool-calling to handle real-world e-commerce queries like orders and refunds. Designed a RAG pipeline over 5,000+ documents using FAISS and deployed on AWS with Docker, handling 500 concurrent users with p99 latency under 900ms.",
      tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'FAISS', 'AWS', 'Docker'],
      github: 'https://github.com/akshayasahoo1/ai-support-agent'
    },
    {
      title: 'Real-Time Order Management System',
      date: "Sept '25 - Jan '26",
      role: 'Backend Developer',
      description: "Engineered scalable REST APIs handling 10,000+ concurrent requests using Node.js and Express. Implemented Redis caching and Bull Queue for async processing, reducing latency by 40%. Enabled real-time tracking using WebSockets and deployed on AWS.",
      tech: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'WebSockets', 'AWS'],
      github: 'https://github.com/akshayasahoo1/Real-Time-Order-Service'
    },
    {
      title: 'Distributed Job Scheduler',
      date: "Feb '25 - Apr '25",
      role: 'Backend Developer',
      description: "Developed a fault-tolerant distributed job scheduler using Java and Spring Boot. Implemented multithreading with Executor Service, cron-based scheduling, retry mechanisms, and dead-letter queues. Containerized using Docker for consistent deployment.",
      tech: ['Java', 'Spring Boot', 'MySQL', 'Multithreading', 'Docker'],
      github: 'https://github.com/akshayasahoo1/Distributed-E-Commerce-Backend-'
    },
    {
      title: 'Backend API System (ProvinceApp)',
      date: "Dec '25 - Present",
      role: 'Backend Developer Intern',
      description: "Designed production-grade REST APIs using Node.js, Express, and PostgreSQL across multiple modules. Implemented JWT authentication and RBAC, improved performance by 40% using Redis caching and DB indexing, and deployed using Docker on AWS.",
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'Docker', 'AWS'],
      github: 'https://github.com/akshayasahoo1/Province-App'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Projects</h2>
          <p className="section-subtitle animate-on-scroll">
            Scalable backend systems, real-time architectures, and AI-powered applications built with production-level engineering practices.
          </p>
        </div>
        
        <div className="modern-projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card glass-panel animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-content">
                <div className="project-top">
                  <span className="project-role">{project.role}</span>
                  <span className="project-date">{project.date}</span>
                </div>
                
                <h3 className="project-title text-gradient-color">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="project-link"
                >
                  <span>View Source Code</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;