import React from 'react';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Scalable & maintainable architecture'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design Excellence',
      description: 'Pixel-perfect implementations'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Lightning-fast user experiences'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Standards',
      description: 'International quality & aesthetics'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed animate-fade-in-left">
                Hi, I'm <span className="text-gold-500 font-semibold">Mahmoud Rady</span>, a Frontend Developer passionate about building modern, 
                high-performance, and visually compelling web interfaces. I specialize in React.js and Tailwind CSS, 
                with a strong focus on user experience, responsive design, and clean, scalable code.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed animate-fade-in-left" style={{animationDelay: '0.2s'}}>
                Over the past period, I've built a series of professional-grade websites that reflect real-world 
                standards in design, performance, and user interaction.
              </p>

              <p className="text-lg text-white/80 leading-relaxed animate-fade-in-left" style={{animationDelay: '0.4s'}}>
                I believe in building not just websites, but <span className="text-gold-500 font-semibold">memorable digital experiences</span>. 
                Every project I deliver is carefully crafted to leave a strong impression and deliver tangible value 
                to users and clients alike.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-dark-700 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 card-glow animate-fade-in-right"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-gold-500 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;