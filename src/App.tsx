import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import PastLife from './components/PastLife';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <PastLife />
      <Contact />
    </div>
  );
}

export default App;