import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  BarChart3,
  MessageSquare,
  Award,
  Calendar,
  ExternalLink,
} from 'lucide-react';

import StatsSection from './components/StatsSection';
import ResumeDownload from './components/ResumeDownload';


/**
 * Main portfolio component
 */
const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      });
    }, observerOptions);
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Product Strategy', level: 95, icon: Target },
    { name: 'User Research', level: 88, icon: Users },
    { name: 'Data Analytics', level: 92, icon: BarChart3 },
    { name: 'Agile/Scrum', level: 94, icon: TrendingUp },
    { name: 'Stakeholder Management', level: 90, icon: MessageSquare },
    { name: 'Innovation', level: 87, icon: Lightbulb },
  ];

  const experiences = [
    {
      title: 'Senior Product Manager',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description:
        'Led cross-functional teams to deliver innovative SaaS products, increasing user engagement by 40% and revenue by $2M annually.',
      achievements: [
        'Launched 3 major product features',
        'Managed $5M product budget',
        'Led team of 12 developers',
      ],
    },
    {
      title: 'Product Manager',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description:
        'Drove product roadmap for B2B platform, focusing on user experience optimization and market expansion.',
      achievements: [
        'Grew user base by 150%',
        'Reduced churn rate by 25%',
        'Launched mobile app',
      ],
    },
    {
      title: 'Associate Product Manager',
      company: 'Innovation Labs',
      period: '2018 - 2020',
      description:
        'Collaborated with engineering and design teams to develop MVP features for fintech applications.',
      achievements: [
        'Delivered 15+ features',
        'Improved user satisfaction by 30%',
        'Led market research',
      ],
    },
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description:
        'Designed and launched an intelligent dashboard that provides real-time insights, reducing decision-making time by 60%.',
      tags: ['AI/ML', 'Analytics', 'UX Design'],
      impact: '60% faster insights',
      status: 'Launched',
    },
    {
      title: 'Mobile-First E-commerce Platform',
      description:
        'Led the development of a responsive e-commerce solution that increased mobile conversions by 45%.',
      tags: ['Mobile', 'E-commerce', 'Conversion'],
      impact: '45% conversion increase',
      status: 'Live',
    },
    {
      title: 'Customer Onboarding Optimization',
      description:
        'Redesigned the entire onboarding flow, reducing drop-off rates and improving user activation.',
      tags: ['UX Research', 'Optimization', 'Analytics'],
      impact: '35% better retention',
      status: 'Completed',
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out',
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CK
          </div>
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'experience', 'projects', 'stats', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-400 ${activeSection === section ? 'text-blue-400' : 'text-gray-300'}`}
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}` }>
            <div className="mb-6 relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-4xl font-bold">CK</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Cem Kilic
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Product Manager & Strategic Innovator
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into successful products through data-driven decisions,
              user-centric design, and strategic thinking. Passionate about building
              solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group border border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-2"
              >
                Let's Connect
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  With over 5 years of experience in product management, I specialize in
                  bridging the gap between technology and user needs. I thrive in fast-paced
                  environments where innovation meets execution.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My approach combines analytical thinking with creative problem-solving,
                  ensuring that every product decision is backed by data while staying
                  true to the user experience vision.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Product Strategy', 'Agile Methodology', 'User Research', 'Data Analysis', 'Stakeholder Management'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-blue-400" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                        <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible.about ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}` }>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                        <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}` }>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-6 h-6 text-blue-400" />
                        <span className="text-sm px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          {project.status}
                        </span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Impact:</div>
                      <div className="text-lg font-semibold text-green-400">{project.impact}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (new) */}
      <StatsSection />

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}` }>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to discuss your next product challenge? I'm always excited to explore
              new opportunities and collaborate on innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:cem.kilic@example.com"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/cemkilic"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-3"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                LinkedIn
              </a>
              <a
                href="https://github.com/cemkilic"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-3"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
            <ResumeDownload />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Cem Kilic. Crafted with passion for great products.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;