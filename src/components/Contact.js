import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import React from 'react';
export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails(prev => ({ ...prev, [category]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });
      
      const result = await response.json();
      setStatus({
        success: result.code === 200,
        message: result.message || (result.code === 200 
          ? 'Message sent successfully' 
          : 'Something went wrong')
      });
    } catch (error) {
      setStatus({ success: false, message: 'Network error occurred' });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact starry-bg" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} 
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName}
                          placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.lastName}
                          placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email}
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="tel" 
                          value={formDetails.phone}
                          placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message}
                          placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};