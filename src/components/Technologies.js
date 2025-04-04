import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiPytorch, SiJenkins } from "react-icons/si";

const techList = [
  { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
  { name: "SQL", icon: <FaDatabase size={50} color="#f29111" /> },
  { name: "MongoDB", icon: <SiMongodb size={50} color="#47A248" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: "PyTorch", icon: <SiPytorch size={50} color="#EE4C2C" /> },
  { name: "Jenkins", icon: <SiJenkins size={50} color="#D24939" /> }
];

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState("");

  return (
    <section className="technologies">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <h2>Technologies</h2>
            <p className="tech-subtitle">Here are some technologies that I regularly work with</p>
            <div className="tech-icons">
              {techList.map((tech, index) => (
                <div
                  key={index}
                  className="tech-item"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech("")}
                >
                  {tech.icon}
                </div>
              ))}
            </div>
            <p className={`tech-name ${hoveredTech ? "visible" : ""}`}>{hoveredTech}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technologies;
