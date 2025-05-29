 import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive charts, and responsive design.",
      tech: ["React", "API Integration", "Chart.js", "CSS3"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Drag & Drop"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-8 h-8" />, items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { name: "Backend", icon: <Zap className="w-8 h-8" />, items: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "REST APIs"] },
    { name: "Tools", icon: <Palette className="w-8 h-8" />, items: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === item ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium capitalize hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 mb-8">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold">JS</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              John Smith
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, responsive web applications with modern technologies. 
            Passionate about clean code, great user experiences, and continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">My Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital solutions that make a difference. I love turning complex problems 
                into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/20"></div>
            </div>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-purple-400 mb-4">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">{skillGroup.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">john@example.com</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/johnsmith</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/johnsmith</p>
            </div>
          </div>
          
          <a
            href="mailto:john@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 John Smith. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;