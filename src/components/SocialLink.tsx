import React, { ReactNode } from 'react';

export interface SocialLinkData {
  href: string;
  icon: ReactNode;
  label: string;
}

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="
      w-12 h-12 rounded-lg
      bg-cyan-950/40 border border-cyan-500/30
      flex items-center justify-center
      text-cyan-400 text-xl
      hover:bg-cyan-900/50 hover:border-cyan-400/50 hover:text-cyan-300
      hover:shadow-[0_0_20px_rgba(0,220,255,0.3)]
      transition-all duration-300
    "
  >
    {icon}
  </a>
);

export default SocialLink;
