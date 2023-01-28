import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import Nav from './containers/Nav';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <HashLink to="#AboutMe">AboutMe</HashLink>
        <HashLink to="#Skills">Skills</HashLink>
        <HashLink to="#Projects">Projects</HashLink>
        <HashLink to="#Contact">Contact</HashLink>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
      </Router>
    </div>
  );
}

export default App;
