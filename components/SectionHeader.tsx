
import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-6 px-1">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
        <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">{title}</h2>
      </div>
    </div>
  );
};
