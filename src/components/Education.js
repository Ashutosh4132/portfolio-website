import React from 'react';
import '../App.css';
import eduIcon from '../assets/icons/certificate-degree-document-svgrepo-com.svg';

const Education = () => {
  return (
    <section className="technologies experience-wide fade-in-up fade-in-delay" id="education">
      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Education</h2>
      <div className="experience-cards-container">
        <div className="experience-card">
          {/* Icon Block */}
          <div className="experience-icon-section" title="Academic Degree">
            <img
             src={eduIcon}
             alt="Education Icon"
             className="experience-icon animated-icon"
             style={{ width: '120px', height: '120px' }}
            />
          </div>


          {/* Text Content */}
          <div className="experience-content">
            <h3 style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.8rem)' }}>B.Tech. — Computer Science Engineering</h3>
            <span className="experience-date">April 2020 – April 2024</span>
            <ul>
              <li><strong>University:</strong> Chhattisgarh Swami Vivekanand Technical University</li>
              <li><strong>Institute:</strong> Shri Shankaracharya Technical Campus</li>
              <li><strong>Specialization:</strong> Artificial Intelligence & Machine Learning</li>
              <li><strong>Graduated with:</strong> 82% Average Score (First Division with Honors)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
