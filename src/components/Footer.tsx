import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-800 border-t border-gold-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo and Description */}
            <div className="text-center md:text-left">
              <div className="text-3xl font-playfair font-bold gradient-text mb-4">
                Mahmoud Rady
              </div>
              <p className="text-white/70 max-w-md">
                Frontend Developer crafting memorable digital experiences with modern technologies and cinematic design.
              </p>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gold-500/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2025 Mahmoud Rady. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-gold-500 fill-current" />
                <span>using React.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;