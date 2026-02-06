import React from 'react';

interface FooterProps {
  name?: string;
  initials?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  name = 'Richard Ngo',
  initials = 'RN',
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="relative z-10 border-t border-cyan-500/20 bg-gray-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center">
              <span className="font-bold text-white text-sm">{initials}</span>
            </div>
            <span className="text-gray-400">{name}</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {year} All rights reserved. Built with 💙
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
