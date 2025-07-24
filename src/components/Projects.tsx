import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bon El Sultan',
      subtitle: 'Premium Coffee Store',
      description: 'An elegant coffee shop website with traditional Arabic aesthetics, a fully responsive layout, and immersive visual storytelling.',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'E-commerce'
    },
    {
      title: 'Chronos Luxury',
      subtitle: 'Product Landing Page',
      description: 'A cinematic landing page for a luxury watch, featuring rich animations and storytelling that mimics high-end international advertising.',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'CSS3', 'GSAP'],
      category: 'Landing Page'
    },
    {
      title: 'Nova Estate',
      subtitle: 'Real Estate Website',
      description: 'A modern real estate platform showcasing properties with clean visuals, structured layout, and intuitive navigation.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Tailwind CSS', 'Node.js'],
      category: 'Platform'
    },
    {
      title: 'Inter Point',
      subtitle: 'Egypt Tourism',
      description: 'A tourism company website promoting domestic travel across Egypt, with multilingual support and full-page navigation.',
      image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'i18next', 'Tailwind CSS'],
      category: 'Tourism'
    },
    {
      title: 'LUXE Store',
      subtitle: 'Home Decor E-commerce',
      description: 'A stylish e-commerce store for furniture and décor, including offer pages, product details, and a shopping cart experience.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Redux', 'Stripe API'],
      category: 'E-commerce'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A collection of professional-grade websites that reflect real-world standards in design and performance
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-dark-700 rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500 card-glow animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500 text-dark-900 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-dark-900/80 text-white rounded-full hover:bg-gold-500 hover:text-dark-900 transition-colors">
                      <ExternalLink size={18} />
                    </button>
                    <button className="p-2 bg-dark-900/80 text-white rounded-full hover:bg-gold-500 hover:text-dark-900 transition-colors">
                      <Github size={18} />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gold-500 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-600 text-white/80 text-sm rounded-full border border-gold-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-105"
            >
              Let's Build Something Amazing Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;