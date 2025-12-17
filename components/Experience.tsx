import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { SketchyCard, SketchyBadge } from './ui/SketchyComponents';
import { Briefcase } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'Hagia Labs (Singapore)',
    period: 'Jan 2024 - Present',
    description: [
      'Developed an AI-powered HR data validation/cleaning system using Python, FastAPI & PostgreSQL with RAG knowledge access.',
      'Centralized operational data into a unified database, reducing unnecessary meetings and improving workflow visibility.',
      'Designed AI-supported workflows for TV/film operations, accelerating content development.',
      'Built e-commerce analytics pipelines for real-time recommendations and trend detection.'
    ],
    techUsed: ['Python', 'FastAPI', 'RAG', 'PostgreSQL', 'AI Chatbots']
  },
  {
    id: '2',
    role: 'Software Developer',
    company: 'Shortimize (Delaware, USA)',
    period: 'July 2025 - Sep 2025',
    description: [
      'Accelerated dashboard loading times by integrating Redis caching and improving data-fetch strategies.',
      'Refined UI/UX components with designers to improve navigation clarity.',
      'Resolved critical bugs across authentication and data-fetching layers.'
    ],
    techUsed: ['Redis', 'Caching', 'UI/UX Optimization', 'Bug Fixing']
  },
  {
    id: '3',
    role: 'Junior Software Engineer',
    company: 'Bronix Engineering',
    period: 'Apr 2023 - Jan 2024',
    description: [
      'Introduced vector database technologies (Qdrant, Weaviate, FAISS) enabling advanced semantic search.',
      'Developed AI-powered legal chatbots reducing manual legal review time.',
      'Reduced high-traffic query latency by up to 40% by refactoring DB schemas.',
      'Redesigned critical API endpoints in Go and Node.js for higher throughput.'
    ],
    techUsed: ['Go', 'Node.js', 'Vector DBs', 'Docker', 'Qdrant']
  },
  {
    id: '4',
    role: 'Junior Software Engineer',
    company: 'CarpetDiem (Dubai)',
    period: 'Jan 2023 - Mar 2023',
    description: [
      'Developed an interactive NFT creation platform using Web3 technologies.',
      'Built real-time fractal art generation systems with canvas-based rendering.',
      'Implemented Web3 wallet connectivity and on-chain digital artwork publishing.',
      'Built Discord automation tools for community engagement.'
    ],
    techUsed: ['JavaScript', 'Web3', 'OpenAI API', 'Discord API']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-hand text-5xl font-bold mb-4">Work History</h2>
        <p className="font-hand text-xl text-gray-600">My path of building impactful software.</p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-ink opacity-20 transform -translate-x-1/2 md:translate-x-0 border-l-2 border-dashed border-ink h-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-white border-4 border-ink rounded-full transform -translate-x-1/2 md:translate-x-[-10px] z-10 shadow-sm"></div>

              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                <SketchyCard className="relative hover:scale-[1.02] transition-transform">
                  <div className="absolute -top-4 -right-4 bg-highlight border-2 border-ink px-3 py-1 font-bold text-sm shadow-[2px_2px_0px_0px_#1a1a1a]">
                    {exp.period}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={20} className="text-gray-600" />
                    <h3 className="font-bold text-xl">{exp.role}</h3>
                  </div>
                  <h4 className="text-lg text-gray-600 font-bold mb-4 border-b-2 border-ink/10 pb-2">{exp.company}</h4>
                  
                  <ul className="list-disc list-outside ml-4 mb-4 space-y-2 text-gray-700">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap mt-4">
                    {exp.techUsed.map(tech => (
                      <SketchyBadge key={tech}>{tech}</SketchyBadge>
                    ))}
                  </div>
                </SketchyCard>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};