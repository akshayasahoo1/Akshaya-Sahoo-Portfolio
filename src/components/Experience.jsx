import React from 'react';
import './Experience.css';

const Experience = () => {

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
    <section id="experience" className="section">
      <div className="container">

        {/* EXPERIENCE */}
        <h2 className="section-title animate-on-scroll">Experience</h2>

        <div className="timeline">
          <div className="timeline-item animate-on-scroll">
            <div className="timeline-dot"></div>

            <div className="timeline-content glass-panel">
              <h3 className="timeline-title">Backend Developer Intern</h3>
              <div className="timeline-subtitle">ProvinceApp.in</div>
              <div className="timeline-date">Dec 2025 – Present</div>

              <ul className="timeline-details">
                <li>Designed and developed scalable REST APIs using Node.js and Express with PostgreSQL.</li>
                <li>Reduced API latency by 40% using Redis caching, database indexing, and async job queues.</li>
                <li>Implemented secure authentication using JWT and role-based access control (RBAC).</li>
                <li>Deployed backend services using Docker on AWS with monitoring and logging.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <h2 
          className="section-title animate-on-scroll" 
          style={{ marginTop: '4rem', marginBottom: '2rem' }}
        >
          Certifications
        </h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              className="cert-card glass-panel animate-on-scroll"
              key={cert.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-top">
                <span className="cert-date">{cert.date}</span>
              </div>

              <h3 className="cert-title">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cert-link"
                >
                  {cert.title}
                </a>
              </h3>

              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;