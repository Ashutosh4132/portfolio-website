import { useMemo } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
export const Skills = () => {
  const responsive = useMemo(() => ({
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10
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
              Programming Language - Python,C,C++ , Machine Learning - Data-preprocessing , Model Training and Testing , Algorithms , MLops - CI/CD ,TF-extended,ML-flow , Database - MySQL,MongoDB<br />
              Frameworks  - Tensorflow,pytorch. , Data visualization - PowerBI,Tableau, MS Excel , API Testing - Postman , REST , Tools - Jira , FIgma
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
                    <img 
                      src={skill.image} 
                      alt={skill.title} 
                      loading="lazy"
                    />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img 
        className="background-image-left" 
        src={colorSharp} 
        alt="Background decoration" 
        loading="lazy"
      />
    </section>
  );
};