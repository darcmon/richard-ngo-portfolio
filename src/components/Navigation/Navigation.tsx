import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      highlightCurrentSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight current section in navbar
  const highlightCurrentSection = () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach((section) => {
      const htmlElement = section as HTMLElement;
      const sectionTop = htmlElement.offsetTop - 100;
      const sectionHeight = htmlElement.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute('id') || '';
      }
    });

    setActiveSection(current);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const targetSection = document.querySelector(
      `#${sectionId}`,
    ) as HTMLElement;
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      // Highlight the section briefly
      targetSection.classList.add('section-highlight');
      setTimeout(() => {
        targetSection.classList.remove('section-highlight');
      }, 1000);
    }
  };

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg border-b border-cyan-500/30 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-gray-900/90 shadow-lg' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-md blur-sm"></div>
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center relative shadow-lg shadow-indigo-800/20">
                <div className="absolute inset-[3px] bg-gray-900 rounded-[4px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                  <div className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    RN
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
              Richard Ngo
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'home'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'about'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'skills'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'projects'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`nav-link px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'contact'
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </button>
            <div className="relative ml-4 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <button className="contact-btn px-4 py-2 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-sm font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300">
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Connect
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-button"
              className="relative w-10 h-10 focus:outline-none group"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  className={`block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-cyan-400 transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="pt-2 pb-4 space-y-1">
            <button
              onClick={() => handleNavLinkClick('home')}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'home'
                  ? 'text-cyan-400 bg-gray-800/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavLinkClick('about')}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'about'
                  ? 'text-cyan-400 bg-gray-800/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavLinkClick('skills')}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'skills'
                  ? 'text-cyan-400 bg-gray-800/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => handleNavLinkClick('projects')}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'projects'
                  ? 'text-cyan-400 bg-gray-800/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavLinkClick('contact')}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                activeSection === 'contact'
                  ? 'text-cyan-400 bg-gray-800/50'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
              }`}
            >
              Contact
            </button>
            <div className="px-4 pt-2">
              <button className="contact-btn w-full px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Connect
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
