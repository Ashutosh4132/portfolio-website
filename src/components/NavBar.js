import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/am.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/icons8-gmail-logo.svg';
import React from 'react';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveLink(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    const sections = ['home', 'skills', 'projects', 'experience'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <Navbar expand={false} className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Nav className="ms-auto d-flex flex-row gap-3">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
          <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}>Experience</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
        </Nav>

        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/ashutosh-mishra-919388210/"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="https://github.com/Ashutosh4132"><img src={navIcon2} alt="GitHub" /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=am9981435388@gmail.com" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Gmail" /></a>
          </div>
          <HashLink smooth to="#contact">
            <button className="vvd"><span>Let's Connect</span></button>
          </HashLink>
        </span>

      </Container>
    </Navbar>
  );
};
