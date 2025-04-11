import React, { useState, useEffect } from 'react';
import '../App.css';

const certifications = [
  {
    title: "NPTEL : Complete Machine Learning course using Python and R",
    issuer: "NPTEL",
    skills: [
      "Supervised and unsupervised learning",
      "Model evaluation techniques",
      "Overfitting and regularization",
      "Mathematical foundations of ML"
    ],
    technologies: ["Python", "Scikit-learn", "Matplotlib", "Pytorch", "CNN"]
  },
  {
    title: "Internshala: Complete Data Science course + Gen AI",
    issuer: "Internshala",
    skills: [
      "Data preprocessing in Python & Excel",
      "Data visualization with Tableau & Power BI",
      "Predictive modeling",
      "Capstone project with real-world dataset"
    ],
    technologies: ["Pandas", "Power BI", "Excel", "Tableau", "Pytorch", "CNN", "R", "Llama"]
  },
  {
    title: "Coursera : Complete Machine Learning using Python and R",
    issuer: "Coursera",
    skills: [
      "Linear and logistic regression",
      "Neural networks and deep learning",
      "Gradient descent and backpropagation",
      "Machine learning system design"
    ],
    technologies: ["Octave", "NumPy", "TensorFlow", "Pytorch", "CNN", "R", "Reinforcement Learning"]
  },
  {
    title: "Coursera: Data Visualization using Excel , Tableau and Power BI",
    issuer: "Coursera",
    skills: [
      "Principles of visual encoding",
      "Creating dashboards",
      "Storytelling with data",
      "Designing interactive visualizations"
    ],
    technologies: ["Tableau", "D3.js", "Dax", "Power BI", "Excel", "Matlab"]
  }
];

const Certification = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleCards(certifications.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const openDialog = (index) => {
    setOpenIndex(index);
    document.body.classList.add('dialog-open');
  };

  const closeDialog = () => {
    setOpenIndex(null);
    document.body.classList.remove('dialog-open');
  };

  const handleDialogClick = (e) => {
    if (e.target.classList.contains('certification-dialog')) {
      closeDialog();
    }
  };

  return (
    <section className="certifications-section fade-in-up fade-in-delay" id="certifications">
      <h2>Certifications</h2>
      <div className="certification-cards">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`certification-card ${visibleCards.includes(index) ? 'card-fade-in' : 'card-hidden'}`}
          >
            <h4 style={{ textAlign: 'left' }}>{cert.title}</h4>
            <p style={{ textAlign: 'left' }}><strong>{cert.issuer}</strong></p>
            <div className="tech-tags">
              {cert.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <button className="view-details-btn" onClick={() => openDialog(index)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Render dialog outside card loop */}
      {openIndex !== null && (
        <div className="certification-dialog" onClick={handleDialogClick}>
          <div className="dialog-content zoom-in">
            <button className="close-btn" onClick={closeDialog}>×</button>
            <h3>{certifications[openIndex].title} - {certifications[openIndex].issuer}</h3>
            <h4>Skills Learned:</h4>
            <ul>
              {certifications[openIndex].skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
            <h4>Technologies Used:</h4>
            <div className="tech-tags">
              {certifications[openIndex].technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certification;