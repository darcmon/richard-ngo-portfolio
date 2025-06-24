import { useEffect } from 'react';

const MainPage = () => {
  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-black text-white font-['Space_Grotesk'] overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl"></div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 opacity-5 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-cyan-500"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 opacity-5 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-cyan-500"></div>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative pt-20"
        >
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 relative">
                  Richard Ngo
                </div>
              </div>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8">
                Full-stack developer crafting innovative digital experiences
                with modern web technologies
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                      View Projects
                    </span>
                  </button>
                </div>
                <button className="px-6 py-3 bg-transparent border border-cyan-500/30 rounded-lg text-cyan-400 text-base font-medium flex items-center justify-center gap-2 hover:bg-cyan-900/10 hover:border-cyan-500/50 transition-all duration-300">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center relative py-20"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">
                    About Me
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    My Journey
                  </div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl group-hover:border-indigo-500/40 transition-all duration-300">
                    <div className="flex flex-col">
                      <div className="font-medium text-xl text-white mb-3">
                        Technical Expertise
                      </div>
                      <p className="text-gray-400">
                        I specialize in building scalable web applications using
                        React, TypeScript, Node.js, and modern frameworks. My
                        passion lies in creating clean, efficient code and
                        intuitive user experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:bg-purple-500/30 transition-all duration-500"></div>
                  <div className="relative bg-gray-900/70 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl shadow-xl group-hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex flex-col">
                      <div className="font-medium text-xl text-white mb-3">
                        Problem Solver
                      </div>
                      <p className="text-gray-400">
                        I enjoy tackling complex challenges and finding
                        innovative solutions. Whether it's optimizing
                        performance, implementing new features, or debugging
                        intricate issues, I approach each problem with curiosity
                        and determination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen flex items-center relative py-20"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">
                    Technical Skills
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    My Expertise
                  </div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Frontend Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-indigo-500/20 rounded-lg p-6 relative z-10 h-full group-hover:border-indigo-500/40 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded bg-indigo-900/60 flex items-center justify-center mr-3 group-hover:bg-indigo-800/70 transition-colors">
                          <svg
                            className="w-5 h-5 text-indigo-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            ></path>
                          </svg>
                        </div>
                        <div className="font-medium text-lg text-indigo-300 group-hover:text-indigo-200 transition-colors">
                          Frontend
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">
                        React, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3
                      </p>
                      <div className="mt-auto text-indigo-400 hover:text-indigo-300 inline-flex items-center cursor-pointer">
                        View projects
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-purple-500/20 rounded-lg p-6 relative z-10 h-full group-hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded bg-purple-900/60 flex items-center justify-center mr-3 group-hover:bg-purple-800/70 transition-colors">
                          <svg
                            className="w-5 h-5 text-purple-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            ></path>
                          </svg>
                        </div>
                        <div className="font-medium text-lg text-purple-300 group-hover:text-purple-200 transition-colors">
                          Backend
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">
                        Node.js, Python, Express, PostgreSQL, MongoDB, REST APIs
                      </p>
                      <div className="mt-auto text-purple-400 hover:text-purple-300 inline-flex items-center cursor-pointer">
                        View projects
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-500/20 rounded-lg p-6 relative z-10 h-full group-hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded bg-cyan-900/60 flex items-center justify-center mr-3 group-hover:bg-cyan-800/70 transition-colors">
                          <svg
                            className="w-5 h-5 text-cyan-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                        <div className="font-medium text-lg text-cyan-300 group-hover:text-cyan-200 transition-colors">
                          Tools & DevOps
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">
                        Git, Docker, AWS, Vercel, VS Code, Figma
                      </p>
                      <div className="mt-auto text-cyan-400 hover:text-cyan-300 inline-flex items-center cursor-pointer">
                        View projects
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center relative py-20"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">
                    My Work
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Featured Projects
                  </div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Project 1 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">
                        E-Commerce Platform
                      </div>
                      <p className="text-gray-200 mb-4">
                        Full-stack e-commerce solution with React, Node.js, and
                        Stripe integration
                      </p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">
                      Project Image 1
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-indigo-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">
                        Task Management App
                      </div>
                      <p className="text-gray-200 mb-4">
                        Collaborative project management tool with real-time
                        updates
                      </p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">
                      Project Image 2
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">
                        Weather Dashboard
                      </div>
                      <p className="text-gray-200 mb-4">
                        Real-time weather application with interactive maps and
                        forecasts
                      </p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">
                      Project Image 3
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-blue-600/80 opacity-0 group-hover:opacity-90 transition-all duration-300 z-10 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xl font-medium text-white mb-2">
                        Portfolio Website
                      </div>
                      <p className="text-gray-200 mb-4">
                        Modern portfolio built with React, TypeScript, and
                        Tailwind CSS
                      </p>
                      <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white hover:bg-white/30 transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                    <div className="text-cyan-400/30 font-medium">
                      Project Image 4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center relative py-20"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-3">
                  <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">
                    Get In Touch
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Contact Me
                  </div>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                  <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl">
                    <div className="text-xl font-medium text-white mb-4">
                      Contact Information
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-cyan-400 mt-1 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-400">Location</div>
                          <div className="text-white">San Francisco, CA</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-cyan-400 mt-1 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-400">Email</div>
                          <a
                            href="mailto:richard@example.com"
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            richard@example.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-cyan-400 mt-1 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-400">Phone</div>
                          <a
                            href="tel:+14155552671"
                            className="text-white hover:text-cyan-400 transition-colors"
                          >
                            +1 (415) 555-2671
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-white mb-2">Follow Me</div>
                      <div className="flex space-x-3">
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-xl shadow-xl">
                    <div className="text-xl font-medium text-white mb-4">
                      Send me a message
                    </div>
                    <form>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm text-gray-400 mb-1"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm text-gray-400 mb-1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="subject"
                          className="block text-sm text-gray-400 mb-1"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-sm text-gray-400 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full bg-gray-800/50 border border-gray-700 focus:border-cyan-500 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
                        ></textarea>
                      </div>
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                        <button
                          type="submit"
                          className="w-full px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300"
                        >
                          <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                            Send Message
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
