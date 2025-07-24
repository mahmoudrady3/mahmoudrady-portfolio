import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: '⚛️',
      description: 'React.js – Component-based architecture with reusable logic',
      level: 95
    },
    {
      category: 'Styling & Design',
      icon: '🎨',
      description: 'Tailwind CSS – Clean, responsive UI design for all devices',
      level: 92
    },
    {
      category: 'Build Tools',
      icon: '⚡',
      description: 'Vite – Ultra-fast development and optimized builds',
      level: 88
    },
    {
      category: 'Animation',
      icon: '🎞️',
      description: 'Framer Motion – Smooth, cinematic animations',
      level: 85
    },
    {
      category: 'Deployment',
      icon: '🌐',
      description: 'GitHub Pages – Efficient and elegant website deployment',
      level: 90
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
              Core Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Specialized expertise in modern frontend technologies and design principles
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-dark-800 rounded-2xl p-8 border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 card-glow animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Skill Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{skill.icon}</span>
                      <div>
                        <h3 className="text-2xl font-playfair font-semibold text-white mb-2">
                          {skill.category}
                        </h3>
                        <p className="text-white/80">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skill Level */}
                  <div className="lg:w-64">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/60">Proficiency</span>
                      <span className="text-sm font-medium text-gold-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-gold-500 to-gold-400 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;