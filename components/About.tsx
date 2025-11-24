import React from 'react';
import Section from './ui/Section';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            I am a passionate developer who believes that great software is the result of 
            meticulous attention to detail and a deep understanding of user needs.
            I specialize in building scalable web applications that not only perform well 
            but also provide delightful user experiences.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            When I'm not coding, I'm exploring new technologies, contributing to open source, 
            or finding inspiration in minimalist architecture and design.
          </p>
        </Section>

        <Section delay={200}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 border border-neutral-800 rounded-lg text-neutral-300 hover:border-white hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
};

export default About;
