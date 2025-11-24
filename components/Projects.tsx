import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Section from './ui/Section';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      <Section className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">Selected Work</h2>
          <p className="text-neutral-400 text-lg">Featured projects and experiments.</p>
        </div>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors group w-fit">
          View GitHub <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <Section key={project.id} delay={index * 150} className="group h-full">
            <div className="h-full flex flex-col bg-neutral-950/50 rounded-2xl overflow-hidden border border-neutral-900 hover:border-neutral-700 transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60"></div>
                
                {/* Floating Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {project.github && (
                        <a href={project.github} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                            <Github size={18} />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-neutral-400 bg-neutral-900/80 px-2.5 py-1 rounded-md border border-neutral-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </section>
  );
};

export default Projects;