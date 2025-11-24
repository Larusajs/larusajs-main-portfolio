import React from 'react';
import Section from './ui/Section';
import { PARTNERS } from '../constants';
import { Hexagon, Triangle, Circle, Square, Box, Layers } from 'lucide-react';

const icons = [Hexagon, Triangle, Circle, Square, Box, Layers];

const Partners: React.FC = () => {
  return (
    <section className="py-12 border-y border-neutral-900 bg-black/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Trusted by innovative teams</p>
        </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-infinite-scroll flex whitespace-nowrap gap-16 group-hover:[animation-play-state:paused]">
          {/* First Loop */}
          {PARTNERS.map((partner, index) => {
             const Icon = icons[index % icons.length];
             return (
              <div key={`p1-${index}`} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <Icon className="w-6 h-6" />
                <span className="text-xl font-bold tracking-tight">{partner}</span>
              </div>
             );
          })}
          {/* Second Loop (Duplicate for seamless scroll) */}
          {PARTNERS.map((partner, index) => {
             const Icon = icons[index % icons.length];
             return (
              <div key={`p2-${index}`} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <Icon className="w-6 h-6" />
                <span className="text-xl font-bold tracking-tight">{partner}</span>
              </div>
             );
          })}
          {/* Third Loop (Extra safety for wide screens) */}
          {PARTNERS.map((partner, index) => {
             const Icon = icons[index % icons.length];
             return (
              <div key={`p3-${index}`} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <Icon className="w-6 h-6" />
                <span className="text-xl font-bold tracking-tight">{partner}</span>
              </div>
             );
          })}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;