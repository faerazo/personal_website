import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute -inset-[10px] opacity-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animation: `float ${Math.random() * 10 + 5}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-blue-500">
              <img 
                src="/fran.jpg"
                alt="Profile picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Science & AI Specialist
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through advanced AI solutions
            and machine learning algorithms.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <button onClick={scrollToProjects} className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
              View Projects
            </button>
            <a href="#contact" className="px-8 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300">
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/faerazo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/faerazo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:hello@faerazo.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </div>
  );
}