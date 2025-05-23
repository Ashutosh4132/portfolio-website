import React, { useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from 'react-bootstrap';

export const Skills = () => {
  const responsive = useMemo(() => ({
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }), []);

  const skills = useMemo(() => [
    { image: meter1, title: "Python" },
    { image: meter2, title: "Machine Learning" },
    { image: meter3, title: "Frameworks" },
    { image: meter1, title: "Automation" }
  ], []);

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Programming Language - Python, C, C++ 
                Machine Learning - Data-preprocessing, Model Training and Testing, Algorithms <br />
                MLops - CI/CD, TF-extended, ML-flow <br/>
                Database - MySQL, MongoDB <br />
                Frameworks - Tensorflow, Pytorch  <br/>
                Data Visualization - PowerBI, Tableau, MS Excel <br />
                API Testing - Postman, REST 
                 Tools - Jira, Figma
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="skill-slider"
                itemClass="skill-item"
              >
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <img src={skill.image} alt={skill.title} loading="lazy" />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background decoration" loading="lazy" />
    </section>
  );
};
