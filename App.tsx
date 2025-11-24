
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import GoToTop from './components/GoToTop';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>
      <GoToTop />
    </div>
  );
};

export default App;