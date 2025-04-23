// Projects.js (Responsive and fluid layout)
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1723734598352.svg";
import projImg2 from "../assets/img/rod-shaped-bacteria-possibly-listeria.svg";
import projImg3 from "../assets/img/home-image-to-3d.png";
import biotechImg from "../assets/img/1.png";
import ecommerceImg from "../assets/img/2.png";
import businessImg from "../assets/img/3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react';

export const Projects = () => {
  const projects = [
    {
      title: "Anu/Veer",
      description: "Personal Learning AI Voice Assistant",
      imgUrl: projImg1,
      points: [
        "Voice-controlled AI assistant",
        "Learns user preferences",
        "Supports multiple languages"
      ]
    },
    {
      title: "Listeria Detection",
      description: "Used 10 ML models to find best Classifier for Listeria Levels in milk",
      imgUrl: projImg2,
      points: [
        "Compared 10 ML models",
        "Achieved 92% accuracy",
        "Used real-world dataset"
      ]
    },
    {
      title: "3D model Generator",
      description: "Personalized AI 3D Model Generator from a single 2D Image",
      imgUrl: projImg3,
      points: [
        "Generates 3D models from images",
        "Uses deep learning techniques",
        "Customizable output format"
      ]
    },
    {
      title: "Biotech Trends prediction software",
      description: "Design & Development",
      imgUrl: biotechImg,
      points: [
        "Built Biotech Trends prediction software with GUI",
        "User-friendly UI/UX",
        "Integrated Llama 3.0 system"
      ]
    },
    {
      title: "Business Website",
      description: "Full Stack Development for a business website",
      imgUrl: businessImg,
      points: [
        "Responsive design",
        "Backend using Node.js",
        "SEO optimized"
      ]
    },
    {
      title: "E-Commerce App",
      description: "Developed a scalable E-Commerce application",
      imgUrl: ecommerceImg,
      points: [
        "Secure payment gateway",
        "Live order tracking",
        "Optimized for mobile"
      ]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container fluid className="px-4 px-md-5">
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>Projects</h2>
                  <p className="mx-auto" style={{ maxWidth: "720px", fontSize: "clamp(1rem, 2.2vw, 1.2rem)" }}>
                    A Chronological Overview of my Professional Experience
                  </p>
                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-4 justify-content-center flex-wrap gap-2"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">AI & ML</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Software Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Analytics</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row className="gx-3 gy-4">
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="gx-3 gy-4">
                          {projects.slice(3, 6).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <Col>
                            <p className="text-muted">Coming Soon...</p>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};