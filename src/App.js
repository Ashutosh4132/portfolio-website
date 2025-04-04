import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import  Technologies  from "./components/Technologies";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <Technologies />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;