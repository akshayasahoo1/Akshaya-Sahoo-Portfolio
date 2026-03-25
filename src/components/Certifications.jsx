import React from 'react';
import './Projects.css';

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'PHP with Laravel Master',
      issuer: 'Udemy',
      date: '2026',
      link: 'https://drive.google.com/file/d/17m8TnybomydAvD1aapfHP--OKjNsTIKW/view'
    },
    {
      id: 2,
      title: 'Generative Artificial Intelligence',
      issuer: 'Udemy',
      date: '2026',
      link: 'https://drive.google.com/file/d/1I1GQcf9DSPMHb9iRWhTPf90itEehKHFI/view'
    },
    {
      id: 3,
      title: 'Data Structures & Algorithms',
      issuer: 'CipherSchools',
      date: '2025',
      link: 'https://drive.google.com/file/d/1V7RkXP7PWGbhc-anS2KFsaFSxvx4P60z/view'
    },
    {
      id: 4,
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2025',
      link: 'https://drive.google.com/file/d/1orpyTuEJ7OECKpY1pWb-kWeYsOzR3Mvm/view'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Certifications</h2>
          <p className="section-subtitle animate-on-scroll">
            Verified certifications supporting my backend development and problem-solving skills.
          </p>
        </div>

        <div className="modern-projects-grid">
          {certifications.map((cert, index) => (
            <div
              className="project-card glass-panel animate-on-scroll"
              key={cert.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-content">

                <div className="project-top">
                  <span className="project-date">{cert.date}</span>
                </div>

                <h3 className="project-title text-gradient-color">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {cert.title}
                  </a>
                </h3>

                <p className="project-description">{cert.issuer}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}