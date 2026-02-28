import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Organizations from './components/Organizations';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/Chatwidget';

const bgStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/WebsiteBackground.png)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
};

function App() {
  return (
    <div className="App" style={bgStyle}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Organizations />
      <Gallery />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
