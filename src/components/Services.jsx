import React from 'react';
import './Services.css';
import { FaServer, FaDatabase, FaCode, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Backend Development',
      description: 'Designing and building scalable backend systems using Node.js and Express. I focus on REST API development, authentication (JWT), performance optimization, and handling real-world production workloads.',
      icon: <FaServer />,
      tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT']
    },
    {
      id: 2,
      title: 'Database Design & Management',
      description: 'Designing efficient database architectures using PostgreSQL, MongoDB, and Redis. I focus on schema design, query optimization, caching strategies, and reliable data handling.',
      icon: <FaDatabase />,
      tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Data Modeling']
    },
    {
      id: 3,
      title: 'Data Structures & Problem Solving',
      description: 'Strong foundation in Data Structures and Algorithms using C++. I regularly solve problems on platforms like LeetCode to improve problem-solving skills and write optimized, efficient code.',
      icon: <FaCode />,
      tags: ['C++', 'DSA', 'LeetCode', 'Algorithms']
    },
    {
      id: 4,
      title: 'Full Stack Application Development',
      description: 'Building complete applications by integrating frontend with backend systems using the MERN stack. I ensure smooth API communication and efficient data flow across the application.',
      icon: <FaTools />,
      tags: ['React', 'MERN', 'API Integration']
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">What I Do</h2>
          <p className="section-subtitle animate-on-scroll">
            Backend-focused developer building scalable systems and solving real-world problems with clean code.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card glass-panel animate-on-scroll" 
              key={service.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span 
                    className="bento-tag primary" 
                    key={i} 
                    style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;