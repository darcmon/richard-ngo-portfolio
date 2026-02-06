import React from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  link,
}) => (
  <div
    className="
      group relative overflow-hidden rounded-lg
      bg-gradient-to-br from-gray-800/50 to-gray-900/50
      border border-cyan-500/20
      hover:border-cyan-400/40
      transition-all duration-300
    "
  >
    <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 relative overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
    </div>
    <div className="p-4">
      <h4 className="text-lg font-semibold text-cyan-100 mb-2 group-hover:text-cyan-300 transition-colors">
        {title}
      </h4>
      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-cyan-950/50 text-cyan-400 rounded border border-cyan-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`View ${title} project`}
      />
    )}
  </div>
);

export default ProjectCard;
