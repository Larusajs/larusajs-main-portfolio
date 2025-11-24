import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Section from './ui/Section';
import { DEV_NAME, DEV_TITLE, BIO, SOCIAL_LINKS } from '../constants';
import LiquidEther from './LiquidEther';

const AbstractIllustration = () => {
  return (
    <div className="w-full max-w-sm mx-auto lg:mx-0 relative aspect-square flex items-center justify-center">
      <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
        {/* Animated SVG Shape */}
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Outer Ring */}
          <circle cx="100" cy="100" r="90" stroke="url(#grad1)" strokeWidth="0.5" fill="none" className="opacity-50" />
          <path d="M100 10 A 90 90 0 0 1 190 100" stroke="white" strokeWidth="2" fill="none" className="animate-[pulse_3s_ease-in-out_infinite]" />
          
          {/* Rotating Orbits */}
          <g className="animate-[spin_10s_linear_infinite_reverse] origin-center">
            <ellipse cx="100" cy="100" rx="80" ry="30" stroke="white" strokeWidth="1" fill="none" opacity="0.3" transform="rotate(45 100 100)" />
            <ellipse cx="100" cy="100" rx="80" ry="30" stroke="white" strokeWidth="1" fill="none" opacity="0.3" transform="rotate(-45 100 100)" />
          </g>
          
          <g className="animate-[spin_15s_linear_infinite] origin-center">
             <rect x="85" y="85" width="30" height="30" stroke="white" strokeWidth="1" fill="none" transform="rotate(45 100 100)" className="opacity-60" />
          </g>

          {/* Inner Core */}
          <circle cx="100" cy="100" r="10" fill="white" className="animate-pulse">
             <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
             <animate attributeName="opacity" values="1;0.8;1" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Connecting Lines */}
          <line x1="100" y1="100" x2="163" y2="37" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
          <line x1="100" y1="100" x2="37" y2="163" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        </svg>
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Background LiquidEther - Full Width */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <LiquidEther
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content Container with padding */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10 px-6 sm:px-12 max-w-7xl mx-auto">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <Section delay={100}>
            <h2 className="text-neutral-400 text-lg sm:text-xl font-medium tracking-wide mb-4">
              Hello, I'm
            </h2>
          </Section>
          
          <Section delay={200}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter mb-6 text-white leading-none">
              {DEV_NAME.split(' ')[0]}<br />
              <span className="text-neutral-500">{DEV_NAME.split(' ')[1]}</span>.
            </h1>
          </Section>

          <Section delay={300}>
            <h3 className="text-2xl sm:text-3xl text-neutral-300 mb-8 font-light">
              {DEV_TITLE}
            </h3>
          </Section>

          <Section delay={400} className="max-w-xl">
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              {BIO}
            </p>
          </Section>

          <Section delay={500} className="flex flex-wrap gap-6 items-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-colors duration-300"
            >
              Let's Talk
            </a>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="p-3 border border-neutral-800 rounded-full hover:border-white hover:bg-neutral-900 transition-all duration-300 group">
                <Github className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 border border-neutral-800 rounded-full hover:border-white hover:bg-neutral-900 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </a>
              <a href={SOCIAL_LINKS.email} className="p-3 border border-neutral-800 rounded-full hover:border-white hover:bg-neutral-900 transition-all duration-300 group">
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              </a>
            </div>
          </Section>
        </div>

        {/* Right Side: Illustration */}
        <div className="order-1 lg:order-2 hidden lg:flex justify-end">
          <Section delay={600} className="w-full flex justify-center">
             <AbstractIllustration />
          </Section>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ArrowDown className="text-neutral-600" />
      </div>
    </section>
  );
};

export default Hero;