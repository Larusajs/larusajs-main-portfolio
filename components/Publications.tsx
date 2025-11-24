import React from 'react';
import Section from './ui/Section';
import { PUBLICATIONS } from '../constants';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      <Section className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Publications</h2>
        <p className="text-neutral-400 text-lg">Thoughts, tutorials, and insights on software development.</p>
      </Section>

      <div className="grid grid-cols-1 gap-4">
        {PUBLICATIONS.map((pub, index) => (
          <Section key={index} delay={index * 100}>
            <a 
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 sm:p-8 rounded-2xl border border-neutral-900 bg-neutral-950/30 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-neutral-900 text-neutral-500 group-hover:text-white transition-colors shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 className="text-l font-semibold text-neutral-200 group-hover:text-white transition-colors mb-1">
                      {pub.title}
                    </h3>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm">
                      <span>{pub.publisher}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
                      <span>{pub.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-neutral-500 group-hover:text-white transition-colors self-end sm:self-auto">
                  <span className="text-sm font-medium hidden sm:block">Read Article</span>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          </Section>
        ))}
      </div>
    </section>
  );
};

export default Publications;