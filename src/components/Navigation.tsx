import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  navItems?: NavItem[];
  logoText?: string;
  logoInitials?: string;
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC<NavigationProps> = ({
  navItems = defaultNavItems,
  logoText = 'Richard Ngo',
  logoInitials = 'RN',
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-cyan-500/5' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/30 rounded blur-sm" />
              <div
                className="
                  relative w-10 h-10 rounded
                  bg-gradient-to-br from-cyan-600 to-purple-600
                  border border-cyan-400/30
                  flex items-center justify-center
                  shadow-lg shadow-cyan-500/20
                "
              >
                <span className="font-bold text-white">{logoInitials}</span>
              </div>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {logoText}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10"
              >
                {item.label}
              </button>
            ))}
            <button
              className="
                ml-4 px-5 py-2 rounded-lg
                bg-gradient-to-r from-cyan-600/80 to-purple-600/80
                border border-cyan-400/30
                text-white font-medium
                hover:from-cyan-500/80 hover:to-purple-500/80
                hover:shadow-[0_0_25px_rgba(0,220,255,0.3)]
                transition-all duration-300
              "
            >
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${mobileOpen ? 'max-h-64 mt-4' : 'max-h-0'}
          `}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
