import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Pricing } from './components/Pricing';
import { SectionDivider } from './components/ui/SketchyComponents';
import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a 
    href={href}
    whileHover={{ scale: 1.1, rotate: -2 }}
    whileTap={{ scale: 0.95 }}
    className="hover:text-ink/70 transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ink transition-all group-hover:w-full"></span>
  </motion.a>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Floating Centered Navbar */}
      <nav className="fixed top-6 w-full z-40 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="pointer-events-auto bg-white/90 backdrop-blur-sm border-2 border-ink rounded-full px-8 py-3 shadow-sketch flex items-center gap-8 font-hand text-xl"
        >
          <a href="#" className="font-bold text-2xl border-r-2 border-ink pr-6 mr-2">Larusajs.dev</a>
          <div className="flex gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Work</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#services">Services</NavLink>
          </div>
        </motion.div>
      </nav>

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Pricing />
        
        <section id="contact" className="py-20 px-4 text-center">
          <h2 className="font-hand text-5xl font-bold mb-8">Let's Build Something Cool</h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://x.com/larusajs" className="p-4 bg-white border-2 border-ink rounded-full shadow-sketch hover:scale-110 transition-transform hover:bg-highlight">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/larusajs/" className="p-4 bg-white border-2 border-ink rounded-full shadow-sketch hover:scale-110 transition-transform hover:bg-highlight">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/larusajs" className="p-4 bg-white border-2 border-ink rounded-full shadow-sketch hover:scale-110 transition-transform hover:bg-highlight">
              <Github className="w-8 h-8" />
            </a>
            <a href="mailto:eneskyarkan@gmail.com" className="p-4 bg-white border-2 border-ink rounded-full shadow-sketch hover:scale-110 transition-transform hover:bg-highlight">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <p className="font-hand text-xl text-gray-500">
            © {new Date().getFullYear()} No Copy-Right. Larusajs  
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;