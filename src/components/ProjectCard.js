import { Col } from "react-bootstrap";
import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, points }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <ul className="proj-points">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};
