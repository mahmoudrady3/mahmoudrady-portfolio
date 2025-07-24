import React from 'react';
import { ChevronDown, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-bg">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Icon */}
          <div className="mb-8 animate-float">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 animate-glow">
              <Rocket size={32} />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 animate-fade-in-up text-shadow">
            <span className="gradient-text">Mahmoud Rady</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-inter font-light mb-8 text-white/90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Crafting <span className="text-gold-500 font-semibold">modern</span> and <span className="text-gold-500 font-semibold">high-performance</span> web interfaces 
            with a passion for exceptional user experiences and cinematic design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500 hover:text-dark-900 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gold-500 hover:text-gold-400 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;