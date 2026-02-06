import React from 'react';

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = '' }) => {
  return (
    <h2 className={`text-3xl font-bold text-cyan-100 flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      {title}
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </h2>
  );
};

export default SectionHeader;
