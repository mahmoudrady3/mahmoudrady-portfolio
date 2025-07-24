import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'mahmoudrady.dev@gmail.com',
      href: 'mailto:mahmoudrady.dev@gmail.com'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@mahmoudrady3',
      href: 'https://github.com/mahmoudrady3'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Available Worldwide',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to bring high-end design, strong UX, and modern development techniques to your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in-left">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  If you're looking for a frontend developer who can bring high-end design, 
                  strong UX, and modern development techniques to your next project – I'm ready to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-dark-800 rounded-xl border border-gold-500/20 hover:border-gold-500/40 transition-all duration-300 animate-fade-in-left"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-gold-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-gold-500 transition-colors font-medium"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-gold-500/10 to-gold-400/10 p-6 rounded-xl border border-gold-500/20 animate-fade-in-left" style={{animationDelay: '0.4s'}}>
                <blockquote className="text-white/90 italic text-lg leading-relaxed">
                  "I believe in building not just websites, but memorable digital experiences. 
                  Every project I deliver is carefully crafted to leave a strong impression 
                  and deliver tangible value."
                </blockquote>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="bg-dark-800 p-8 rounded-2xl border border-gold-500/20">
                <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                  Send Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg text-white placeholder-white/40 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;