import React from 'react';
import { motion } from 'framer-motion';
import { SketchyButton } from './ui/SketchyComponents';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      
      {/* --- Background Doodles (Decorative) --- */}

      {/* 1. Top Left: Geometric Compass/Target */}
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 md:left-20 text-gray-300 opacity-50 hidden md:block select-none pointer-events-none"
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
          <path d="M50 10 L50 90 M10 50 L90 50" />
        </svg>
      </motion.div>

      {/* 2. Top Right: Floating Code Brackets */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-10 md:right-32 text-gray-300 opacity-40 hidden md:block select-none pointer-events-none"
      >
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
           {/* { } */}
           <path d="M40 20 C 30 20, 20 40, 20 50 C 20 60, 30 80, 40 80" />
           <path d="M80 20 C 90 20, 100 40, 100 50 C 100 60, 90 80, 80 80" />
           {/* </> */}
           <path d="M50 65 L70 35" opacity="0.5" />
        </svg>
      </motion.div>

      {/* 3. Bottom Left: Database/Server Stack */}
      <motion.div 
         animate={{ y: [0, 10, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         className="absolute bottom-32 left-10 md:left-32 text-gray-300 opacity-40 hidden md:block select-none pointer-events-none"
      >
         <svg width="80" height="100" viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <ellipse cx="40" cy="20" rx="30" ry="10" />
            <path d="M10 20 v20 c0 5.5 13.5 10 30 10 s30 -4.5 30 -10 v-20" />
            <path d="M10 50 v20 c0 5.5 13.5 10 30 10 s30 -4.5 30 -10 v-20" />
            {/* Connection lines */}
            <path d="M75 30 L85 20 M85 20 L90 25" strokeWidth="1" strokeDasharray="3 3"/>
         </svg>
      </motion.div>

      {/* 4. Bottom Right: Cloud/Network */}
      <motion.div 
         animate={{ x: [0, 10, 0] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         className="absolute bottom-40 right-8 md:right-24 text-gray-300 opacity-40 hidden md:block select-none pointer-events-none"
      >
         <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M20 50 Q 10 50 10 40 Q 10 20 30 20 Q 40 5 60 5 Q 85 5 90 25 Q 110 25 110 45 Q 110 60 90 60 L 20 60" />
             <path d="M30 65 L20 75 M60 65 L60 78 M90 65 L100 75" strokeWidth="2" />
             <circle cx="20" cy="78" r="3" fill="currentColor" />
             <circle cx="60" cy="81" r="3" fill="currentColor" />
             <circle cx="100" cy="78" r="3" fill="currentColor" />
         </svg>
      </motion.div>

      {/* 5. Random Floating "Plus" Signs (Small filler details) */}
      <motion.div className="absolute top-1/4 left-1/4 text-gray-200" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 0v20M0 10h20" stroke="currentColor" strokeWidth="3"/></svg>
      </motion.div>
      <motion.div className="absolute bottom-1/3 right-1/4 text-gray-200" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          <svg width="15" height="15" viewBox="0 0 20 20"><path d="M10 0v20M0 10h20" stroke="currentColor" strokeWidth="3"/></svg>
      </motion.div>

      {/* --- End Background Doodles --- */}


      {/* "Open for Work" Stamp */}
      <motion.div
        initial={{ scale: 2, opacity: 0, rotate: -45 }}
        animate={{ scale: 1, opacity: 1, rotate: -15 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1 }}
        className="absolute top-24 right-4 md:top-32 md:right-32 z-20 hidden sm:block cursor-pointer"
      >
        <div className="border-4 border-ink text-ink px-4 py-2 font-hand font-bold text-xl uppercase tracking-widest opacity-80 mix-blend-multiply mask-image-grunge hover:bg-ink hover:text-white transition-colors duration-300">
          Open for<br/>Projects
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [-3, 3, -3] }}
          transition={{ 
             scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.2 },
             rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="inline-block mb-6 bg-highlight px-4 py-1 border-2 border-ink rounded-sm shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
        >
          <span className="font-hand font-bold text-xl text-ink">Hello, World!</span>
        </motion.div>
        
        <h1 className="font-hand text-6xl md:text-8xl font-bold mb-6 text-ink leading-tight">
          I'm <span className="relative inline-block">
            Enes Kutay
            {/* Underline svg with drawing animation */}
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-accent -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
               <motion.path 
                 d="M0 5 Q 50 10 100 5" 
                 stroke="currentColor" 
                 strokeWidth="15" 
                 fill="none"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 1, delay: 0.5 }}
               />
            </svg>
          </span>
        </h1>
        
        <h2 className="font-hand text-3xl md:text-4xl mb-8 text-ink/80">
          AI & Backend Developer
        </h2>
        
        <p className="font-hand text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-600">
          Building automation focused systems with <span className="font-bold border-b-2 border-accent/50 border-dashed">Python</span>, <span className="font-bold border-b-2 border-accent/50 border-dashed">Go</span>, <span className="font-bold border-b-2 border-accent/50 border-dashed">TypeScript</span> and <span className="font-bold border-b-2 border-accent/50 border-dashed">AI</span>. Founder of multiple data-driven products.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <SketchyButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
            View My Work
          </SketchyButton>
          <SketchyButton variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}>
            Hire Me
          </SketchyButton>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth'})}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  );
};