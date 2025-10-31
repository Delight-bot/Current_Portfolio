import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
