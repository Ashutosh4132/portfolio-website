import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Technologies from "./components/Technologies";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ProfessionalExp from "./components/Professional_exp";
import Certification from './components/Certifications';
import MouseTrail from "./components/MouseTrail"
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <MouseTrail/>
        <NavBar />
        <Banner />
        <Technologies />
        <ProfessionalExp />
        <Skills />
        <Projects />
        <Certification/>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
