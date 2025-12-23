
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-[#0f0f0f] border border-[#1a1a1a] rounded-[2rem] overflow-hidden inner-shadow card-glow ${className}`}>
      {children}
    </div>
  );
};
