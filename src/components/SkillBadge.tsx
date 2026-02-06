import React from 'react';

export interface Skill {
  name: string;
  icon: string;
}

interface SkillBadgeProps {
  name: string;
  icon: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon }) => (
  <div
    className="
      flex items-center gap-2 px-3 py-2
      bg-cyan-950/40 border border-cyan-500/30 rounded
      text-cyan-300 text-sm font-medium
      hover:bg-cyan-900/50 hover:border-cyan-400/50
      transition-all duration-200 cursor-default
      hover:shadow-[0_0_15px_rgba(0,220,255,0.2)]
    "
  >
    <span className="text-lg">{icon}</span>
    <span>{name}</span>
  </div>
);

export default SkillBadge;
