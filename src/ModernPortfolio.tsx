import React from 'react';

// Import all components
import {
  TronGridBackground,
  Navigation,
  Footer,
  BentoTile,
  HeroSection,
  ProjectCard,
  SkillBadge,
  StatTile,
  SocialLink,
  ContactCTA,
  SectionHeader,
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from './components';

// Types
import type { Skill, Project, Stat, GlowColor } from './components';

// ============================================
// DATA CONFIGURATION
// ============================================

const PROFILE_DATA = {
  name: 'Richard Ngo',
  title: 'Full-Stack Developer',
  description:
    'Curious programmer with a background in design, audio/video production, and mental health. Passionate about problem-solving and human-centered design.',
  initials: 'RN',
};

const ABOUT_CONTENT = [
  "I've worked over 6 years in the mental health service industry across diverse roles and populations. I'm someone who can empathize, listen, and provide genuine service to anyone in need.",
  "During the pandemic, I pivoted to technology — learning JavaScript, Python, React.js and more. The guidance of friends and family helped me discover my talent for programming and how to blend my past experience into this new field.",
];

const SKILLS_DATA: Skill[] = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '🚂' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '📦' },
  { name: 'Figma', icon: '🎨' },
];

const PROJECTS_DATA: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack shopping platform with real-time inventory and secure payments.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with drag-and-drop interface.',
    tags: ['TypeScript', 'Firebase', 'Tailwind'],
  },
  {
    title: 'Health Tracker',
    description:
      'Personal wellness app with data visualization and goal tracking.',
    tags: ['React Native', 'Charts', 'API'],
  },
];

const STATS_DATA: (Stat & { gradient: string })[] = [
  { value: '6+', label: 'Years Experience', gradient: 'from-cyan-400 to-purple-400' },
  { value: '15+', label: 'Projects Completed', gradient: 'from-purple-400 to-pink-400' },
  { value: '∞', label: 'Curiosity', gradient: 'from-pink-400 to-orange-400' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/Darcmon', icon: <GitHubIcon />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/richardngo-', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { href: 'https://instagram.com/richyngo', icon: <InstagramIcon />, label: 'Instagram' },
];

// ============================================
// MAIN COMPONENT
// ============================================

const ModernPortfolio: React.FC = () => {
  // Define glow colors for projects
  const projectGlowColors: GlowColor[] = ['cyan', 'purple', 'pink'];

  const handleViewProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // TODO: Implement CV download
    console.log('Download CV clicked');
  };

  const handleContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden">
      {/* Tron Grid Background */}
      <TronGridBackground />

      {/* Navigation */}
      <Navigation logoText={PROFILE_DATA.name} logoInitials={PROFILE_DATA.initials} />

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* BENTO GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
            {/* Hero Tile - Spans 3 columns */}
            <BentoTile className="lg:col-span-3 md:col-span-2" delay={100}>
              <HeroSection
                name={PROFILE_DATA.name}
                title={PROFILE_DATA.title}
                description={PROFILE_DATA.description}
                onViewProjects={handleViewProjects}
                onDownloadCV={handleDownloadCV}
              />
            </BentoTile>

            {/* Social Links Tile */}
            <BentoTile className="lg:col-span-1" glowColor="purple" delay={200}>
              <h3 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </div>
            </BentoTile>

            {/* About Me Tile - Spans 2 columns */}
            <BentoTile id="about" className="lg:col-span-2" glowColor="green" delay={300}>
              <h3 className="text-xl font-semibold text-cyan-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                About Me
              </h3>
              <div className="space-y-4 text-gray-400">
                {ABOUT_CONTENT.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </BentoTile>

            {/* Tech Stack Tile - Spans 2 columns */}
            <BentoTile id="skills" className="lg:col-span-2" glowColor="orange" delay={400}>
              <h3 className="text-xl font-semibold text-cyan-100 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS_DATA.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </BentoTile>

            {/* Projects Section Title */}
            <div id="projects" className="lg:col-span-4 md:col-span-2 mt-8 mb-2">
              <SectionHeader title="Featured Projects" />
            </div>

            {/* Project Cards */}
            {PROJECTS_DATA.map((project, index) => (
              <BentoTile
                key={project.title}
                className="lg:col-span-1 md:col-span-1"
                glowColor={projectGlowColors[index % projectGlowColors.length]}
                delay={500 + index * 100}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                />
              </BentoTile>
            ))}

            {/* Contact CTA Tile */}
            <BentoTile id="contact" className="lg:col-span-1" glowColor="pink" delay={800}>
              <ContactCTA onContact={handleContact} />
            </BentoTile>

            {/* Stats Tiles */}
            {STATS_DATA.map((stat, index) => (
              <BentoTile key={stat.label} delay={600 + index * 50}>
                <StatTile value={stat.value} label={stat.label} gradient={stat.gradient} />
              </BentoTile>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer name={PROFILE_DATA.name} initials={PROFILE_DATA.initials} />
    </div>
  );
};

export default ModernPortfolio;
