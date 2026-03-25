import React from 'react';
import './Skills.css';
import { FaPython, FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMongodb, SiMysql, SiExpress, SiPostgresql, SiOpenai, SiRedis, SiPostman, SiNginx } from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import { TbBrain } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

const getSkillIcon = (skillName) => {
  switch (skillName) {
    case 'Python': return <FaPython className="skill-logo" />;
    case 'C++': return <SiCplusplus className="skill-logo" />;
    case 'JavaScript': return <SiJavascript className="skill-logo" />;
    case 'SQL': return <DiDatabase className="skill-logo" />;
    case 'Node.js': return <FaNodeJs className="skill-logo" />;
    case 'Express.js': return <SiExpress className="skill-logo" />;
    case 'MongoDB': return <SiMongodb className="skill-logo" />;
    case 'MySQL': return <SiMysql className="skill-logo" />;
    case 'PostgreSQL': return <SiPostgresql className="skill-logo" />;
    case 'HTML/CSS': return <div className="skill-logo-group"><FaHtml5/><FaCss3Alt/></div>;
    case 'React': return <FaReact className="skill-logo" />;
    case 'Docker': return <FaDocker className="skill-logo" />;
    case 'AWS': return <FaAws className="skill-logo" />;
    case 'Linux': return <FaLinux className="skill-logo" />;
    case 'Redis': return <SiRedis className="skill-logo" />;
    case 'Postman': return <SiPostman className="skill-logo" />;
    case 'Nginx': return <SiNginx className="skill-logo" />;
    case 'GenAI Systems': return <SiOpenai className="skill-logo" />;
    case 'System Design': return <TbBrain className="skill-logo" />;
    case 'REST API': return <TbBrain className="skill-logo" />;
    case 'CI/CD': return <TbBrain className="skill-logo" />;
    case 'Data Structures & Algorithms': return <TbBrain className="skill-logo" />;
    case 'Git/GitHub': return <FaGithub className="skill-logo" />;
    case 'VS Code': return <VscVscode className="skill-logo" />;
    default: return null;
  }
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'JavaScript', 'Python', 'SQL'],
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST API', 'PostgreSQL', 'MongoDB', 'Redis'],
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'AWS', 'Linux', 'Nginx', 'CI/CD'],
      icon: 'M12 6v6l4 2'
    },
    {
      title: 'Advanced Concepts',
      skills: ['System Design', 'GenAI Systems'],
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3'
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'Postman', 'VS Code'],
      icon: 'M5 3v4M3 5h4M5 21v-4M3 19h4M19 3v4M17 5h4M19 21v-4M17 19h4'
    },
    {
      title: 'API & Testing Tools',
      skills: ['Postman', 'REST API', 'Nginx'],
      icon: 'M12 6v6l4 2'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Arsenal</h2>
        
        <div className="bento-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bento-card glass-panel animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bento-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                </svg>
              </div>
              <h3 className="bento-title">{category.title}</h3>
              <div className="bento-tags">
                {category.skills.map((skill, imgIndex) => (
                  <span key={imgIndex} className="bento-tag">
                    {getSkillIcon(skill)}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bento-card glass-panel bento-wide animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <h3 className="bento-title">Core Competencies & Tools</h3>
            <div className="bento-tags large-tags">
              <span className="bento-tag primary">{getSkillIcon('Data Structures & Algorithms')} Data Structures & Algorithms</span>
              <span className="bento-tag primary">{getSkillIcon('System Design')} System Design</span>
              <span className="bento-tag primary">{getSkillIcon('REST API')} REST API</span>
              <span className="bento-tag outline">{getSkillIcon('Git/GitHub')} Git/GitHub</span>
              <span className="bento-tag outline">{getSkillIcon('VS Code')} VS Code</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;