import React from 'react';
import { motion } from 'framer-motion';
import { SketchyCard, SketchyButton } from './ui/SketchyComponents';
import { Project } from '../types';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Shotlist Studio',
    description: 'A Modular AI Platform for Cinematic Story Generation and Visualization. Enables creative teams to visualize scenes using fine-tuned video generators.',
    techStack: ['Python', 'AI Video', 'LoRA', 'Cinematic Synthesis'],
    link: '#',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    metrics: 'Research Publication'
  },
  {
    id: '2',
    title: 'Enterprise RAG System',
    description: 'HR Data Quality Governance system for a major holding company. Uses RAG to clean data and provide instant knowledge access via chat.',
    techStack: ['FastAPI', 'PostgreSQL', 'RAG', 'Vector DB'],
    link: '#',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    metrics: 'Unified Operational Data'
  },
  {
    id: '3',
    title: 'CarpetDiem NFT',
    description: 'Interactive NFT creation platform allowing users to generate and mint fractal art on-chain. Includes Discord automation for drops.',
    techStack: ['Web3', 'Node.js', 'Canvas API', 'OpenAI'],
    link: '#',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    metrics: 'Real-time Generation'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-hand text-5xl font-bold mb-4 relative inline-block">
            Featured Projects
            <span className="absolute -top-6 -right-8 text-4xl grayscale">🚀</span>
          </h2>
          <p className="font-hand text-xl text-gray-600">From Research Papers to Production SaaS.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SketchyCard className="h-full flex flex-col transform hover:-rotate-1 transition-transform duration-300">
                <div className="border-2 border-ink rounded-sm overflow-hidden mb-4 relative group">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover grayscale opacity-90 group-hover:opacity-100 transition-all duration-500" />
                  {project.metrics && (
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 border-t-2 border-ink p-2 flex items-center justify-center gap-2 font-bold text-sm">
                        <TrendingUp size={16} /> {project.metrics}
                    </div>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-lg text-gray-700 mb-6 flex-grow leading-snug">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-gray-100 border border-ink px-2 py-1 text-sm font-bold rounded-sm text-gray-600">
                      #{tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <SketchyButton className="flex-1 flex items-center justify-center gap-2 text-base py-1">
                    <ExternalLink size={18} /> Details
                  </SketchyButton>
                  {/* <a href="#" className="p-2 border-2 border-ink rounded-sm hover:bg-highlight transition-colors flex items-center justify-center">
                    <Github size={24} />
                  </a> */}
                </div>
              </SketchyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};