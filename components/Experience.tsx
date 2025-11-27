import React from 'react';
import Section from './ui/Section';
import SpotlightCard from './ui/SpotlightCard';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Sticky Title & Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-24">
            <Section>
              <div className="flex items-center gap-3 mb-6 text-neutral-500">
                <div className="p-2 bg-neutral-900 rounded-lg">
                  <Briefcase size={20} />
                </div>
                <span className="text-sm font-medium uppercase tracking-widest">Career Path</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6 text-white">
                Professional<br />
                <span className="text-neutral-500">Experience.</span>
              </h2>
              
              <p className="text-neutral-400 text-lg leading-relaxed max-w-sm">
                A timeline of my professional journey, building software and leading teams across different industries.
              </p>
            </Section>
          </div>
        </div>

        {/* Right Column: Experience List */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {EXPERIENCE.map((exp, index) => (
            <Section key={exp.id} delay={index * 100}>
              <SpotlightCard className="group bg-neutral-950/50 border-neutral-900 hover:border-neutral-700 transition-colors duration-300">
                <div className="p-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
                  
                  {/* Date Column (Mobile: Top, Desktop: Left) */}
                  <div className="sm:w-40 flex-shrink-0">
                    <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium pt-1 whitespace-nowrap">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-200 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-neutral-400 font-medium mb-4">
                      {exp.company}
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Section>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;