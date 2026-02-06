import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  profileImage?: string;
  onViewProjects?: () => void;
  onDownloadCV?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
  profileImage,
  onViewProjects,
  onDownloadCV,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
          👋 Welcome to my digital realm
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-2">{title}</p>
        <p className="text-gray-500 max-w-lg">{description}</p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={onViewProjects}
            className="
              px-6 py-3 rounded-lg
              bg-gradient-to-r from-cyan-600 to-cyan-500
              text-white font-medium
              hover:from-cyan-500 hover:to-cyan-400
              hover:shadow-[0_0_30px_rgba(0,220,255,0.4)]
              transition-all duration-300
            "
          >
            View Projects
          </button>
          <button
            onClick={onDownloadCV}
            className="
              px-6 py-3 rounded-lg
              bg-transparent border border-cyan-500/50
              text-cyan-400 font-medium
              hover:bg-cyan-500/10 hover:border-cyan-400
              transition-all duration-300
            "
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-cyan-400/50">
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
