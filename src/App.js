import logo from './logo.svg';
import React from 'react';
import Navbar from './component/Navbar';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import './App.css';

const App = () => {
  return (
      <div>
          <Navbar />
          <About />
          <Projects />
          <Contact />
      </div>
  );
};

export default App;
