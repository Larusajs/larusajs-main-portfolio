import React from 'react';
import { motion } from 'framer-motion';

interface SketchyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const SketchyButton: React.FC<SketchyButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseClasses = "font-hand text-xl px-6 py-2 border-2 border-ink rounded-sm transition-all duration-200 outline-none";
  const variants = {
    // Uses highlight (light grey) for primary
    primary: "bg-highlight shadow-sketch hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-gray-300",
    secondary: "bg-white shadow-sketch hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px]"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const SketchyCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`font-hand bg-white border-2 border-ink shadow-sketch p-6 rounded-sm ${className}`}>
      {children}
    </div>
  );
};

export const SketchyInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="font-hand w-full bg-paper border-2 border-ink p-3 text-lg outline-none focus:border-ink focus:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all"
      {...props}
    />
  );
};

export const SketchyBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-hand inline-block px-3 py-1 bg-white border-2 border-ink rounded-sm text-sm font-bold shadow-[2px_2px_0px_0px_#1a1a1a] mr-2 mb-2 hover:-translate-y-1 transition-transform">
    {children}
  </span>
);

export const SectionDivider: React.FC = () => (
  <div className="w-full h-8 my-12 opacity-30 overflow-hidden">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,0 C300,40 600,10 1200,0 L1200,120 L0,120 Z" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="10,10"/>
    </svg>
  </div>
);