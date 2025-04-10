import React from 'react';
import '../App.css';
import colorSharp from "../assets/img/color-sharp.png";
import { FaGithub } from "react-icons/fa";

import laptopIcon from '../assets/icons/laptop-coding.png';
import researchIcon from '../assets/icons/research.png';
import aiIcon from '../assets/icons/ai-icon.png';
import dashboardIcon from '../assets/icons/dashboard.png';

const experiences = [
  {
    title: 'Software Developement Engineer',
    icon: laptopIcon,
    tooltip: "Working with Telegram & AI tools",
    sourceLink: "https://github.com/yourusername/project-telegram-ai",
    buttonColor: "#00f6ff",
    description: [
      'Developed a comprehensive Python application that performs Telegram scraping, performs video and audio transcription',
      'Applied an AI model to identify and extract important topics from the scraped data.',
      'Created an intuitive GUI featuring a display screen to show real-time updates & results.'
    ]
  },
  {
    title: 'Research Assistant',
    icon: researchIcon,
    tooltip: "Data science & PhD-level research",
    sourceLink: "https://github.com/yourusername/listeria-analysis",
    buttonColor: "#fca311",
    description: [
      'Worked under a certified PhD student working with raw dataset to find useful insights and analyze listeria levels in milk.',
      'Used over 10 classification models to find most suitable one by recognition and Personal Learning.',
      "Increased model's accuracy by 10% using hyperparameter tuning, Batch Normalization and better Deep Learning techniques."
    ]
  },
  {
    title: 'AI Engineer',
    icon: aiIcon,
    tooltip: "ML pipelines & intelligent agents",
    sourceLink: "https://github.com/yourusername/personal-ai-assistant",
    buttonColor: "#ff4d6d",
    description: [
      'Worked on integration in the personal assistant project including speech recognition, multiple language processing, image recognition and Personal Learning AI model.',
      'Implemented a hybrid AI model combining global knowledge with user-specific data, allowing the assistant to adapt and personalize its responses.',
      'Engineered real-time data pipelines and modular APIs for efficient processing of audio, text, and visual data; optimized system performance by reducing latency by 40%.'
    ]
  },
  {
    title: 'Dashboard Designer',
    icon: dashboardIcon,
    tooltip: "BI dashboards & data visualization",
    sourceLink: "https://github.com/yourusername/powerbi-dashboard",
    buttonColor: "#7ee787",
    description: [
      'Designed and developed an interactive Power BI dashboard for a sports company\'s financial year, showcasing key sales metrics.',
      'Implemented dynamic visualizations and DAX-based custom measures to highlight trends and product category breakdowns.',
      'Integrated data from multiple sources and optimized data models for real-time updates and accurate insights.'
    ]
  }
];

const ProfessionalExp = () => {
  return (
    <section className="technologies experience-wide" id="experience" style={{ position: 'relative' }}>
      <h2>Professional Experience</h2>
      <div className="experience-cards-container">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card">
            <div className="experience-icon-section" title={exp.tooltip}>
              <img src={exp.icon} alt={`${exp.title} Icon`} className="experience-icon animated-icon" />
              <a href={exp.sourceLink} target="_blank" rel="noopener noreferrer">
                <button 
                  className="source-button" 
                  style={{ backgroundColor: exp.buttonColor }}
                >
                  <FaGithub style={{ marginRight: '8px', fontSize: '16px' }} />
                  Source Code
                </button>
              </a>
            </div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <ul>
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <img 
        className="background-image-left" 
        src={colorSharp} 
        alt="Background"
        loading="lazy"
      />
    </section>
  );
};

export default ProfessionalExp;
