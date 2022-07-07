import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import './App.css';
import Services from './components/Services/Services'
import Scrollbar from './components/Scrollbar/Scrollbar';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <div className='Scrollbar'>
        <Scrollbar />
      </div>
      <div className='App'>
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
