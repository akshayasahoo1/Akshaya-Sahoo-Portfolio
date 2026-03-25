import React from 'react';
import './Projects.css'; // reuse same styling

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: '🥇 1st Place – Masai xto10x Hackathon',
      description: 'Built and delivered a scalable backend system under strict time constraints.',
      link: 'https://drive.google.com/file/d/1txmQ80wCh5Se6uySePQhYwvX7cl4E5lZ/view'
    },
    {
      id: 2,
      title: '🏫 IIT Guwahati Software Engineering Project',
      description: 'Designed REST API-based backend architecture recognized by faculty evaluation.',
      link: 'https://drive.google.com/file/d/1_pRahdeTMY8lMU9n9ltGK4-iWh_OvxXR/view'
    },
    {
      id: 3,
      title: '🎯 450+ DSA Problems Solved',
      description: 'Consistent problem solving on LeetCode, HackerRank, and GeeksforGeeks.',
      link: '#'
    },
    {
      id: 4,
      title: '🪖 NCC Leadership Experience',
      description: 'Led 20+ cadets during defence and rifle training at NCC camp.',
      link: 'https://drive.google.com/file/d/1uit2AKw2hm4ZGe59IISSpCauBjYw1D61/view'
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Achievements</h2>
          <p className="section-subtitle animate-on-scroll">
            Highlights of my technical growth, problem-solving journey, and leadership experience.
          </p>
        </div>

        <div className="modern-projects-grid">
          {achievements.map((item, index) => (
            <div
              key={item.id}
              className="project-card glass-panel animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-content">

                <h3 className="project-title text-gradient-color">
                  {item.link !== '#' ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>

                <p className="project-description">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
