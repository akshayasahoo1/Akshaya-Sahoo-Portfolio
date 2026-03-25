import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">

          <p className="copyright">
            &copy; {new Date().getFullYear()} Akshaya Kumar Sahoo. 
            Backend Developer | Built with React & CSS.
          </p>

          <div className="footer-links">
            <a href="https://github.com/akshayasahoo1" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akshayasahooo/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://youtube.com/@sahooo2204" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href="https://www.instagram.com/sahooo.in/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;