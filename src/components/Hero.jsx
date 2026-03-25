import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import './Hero.css';
import profileImg from '../assets/profile.JPG';

const Hero = () => {

  const words = [
    'scalable backend systems',
    'high-performance APIs',
    'real-time applications',
    'distributed systems'
  ];

  const typedText = useTypewriter(words, 80, 50, 2000);

  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-on-scroll">
          
          <div className="hero-text-content">

            <div className="hero-badge neu-pill">
              <span className="badge-dot"></span> Backend Developer Portfolio
            </div>
            
            <h1 className="hero-name">
              Hi, I'm <br className="hidden-mobile" />
              <span className="text-gradient-name">Akshaya Kumar Sahoo</span>
            </h1>
          
            <h2 className="hero-title">
              <span className="static-text">I build </span>
              <span className="typed-text text-neon">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
          
            <p className="hero-description">
              Backend Developer focused on building scalable systems, high-performance APIs, and real-time applications. 
              Experienced with <span className="text-highlight">Node.js, Redis, PostgreSQL, and AWS</span>. 
              I also explore <span className="text-highlight">GenAI systems and system design</span> to solve real-world problems.
            </p>
          
            <div className="hero-cta">

              <a href="#projects" className="neu-pill btn-primary">
                Explore Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a 
                href="https://drive.google.com/file/d/1mqgCZp47IGy_0KqqCH54u_yXpic5xCCa/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer" 
                className="neu-pill btn-outline"
              >
                View Resume ↗
              </a>

              <a 
                href="https://drive.google.com/uc?export=download&id=1mqgCZp47IGy_0KqqCH54u_yXpic5xCCa" 
                className="neu-pill btn-outline"
              >
                Download Resume
              </a>

            </div>

            <div className="hero-socials glass-panel-sm">
              
              {/* GitHub */}
              <a href="https://github.com/akshayasahoo1" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.302 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.63-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/akshayasahooo/" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7 19H4V8h3v11zM5.5 6.732c-.966 0-1.75-.79-1.75-1.764S4.534 3.204 5.5 3.204s1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@sahooo2204" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.582 6.186a2.636 2.636 0 0 0-1.884-1.884C17.98 3.84 12 3.84 12 3.84s-5.98 0-7.698.462A2.636 2.636 0 0 0 2.418 6.186C1.956 7.904 1.956 12 1.956 12s0 4.096.462 5.814a2.636 2.636 0 0 0 1.884 1.884c1.718.462 7.698.462 7.698.462s5.98 0 7.698-.462a2.636 2.636 0 0 0 1.884-1.884c.462-1.718.462-5.814.462-5.814s0-4.096-.462-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/sahooo.in/" target="_blank" rel="noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm4.25 5.5A4.75 4.75 0 1 1 7.25 12 4.756 4.756 0 0 1 12 7.5zm0 7.75A3 3 0 1 0 9 12a3.003 3.003 0 0 0 3 3.25zm5.25-8.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/>
                </svg>
              </a>

            </div>
          </div>

          <div className="hero-image-container floating-avatar">
            <img src={profileImg} alt="Akshaya Kumar Sahoo" className="hero-profile-img glass-panel" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;