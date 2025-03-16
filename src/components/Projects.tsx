import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Predicting Ternary Complex Structures with AlphaFold 3',
    description: 'Developed a computational pipeline that leverages AlphaFold 3 to accurately predict PROTAC-mediated ternary complexes for targeted protein degradation.',
    image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/AF_hero_2.jpg',
    tech: ['Python', 'PyTorch', 'Linux', 'Docker'],
    github: 'https://github.com/NilsDunlop/PROTACFold',
    demo: 'https://chemrxiv.org/engage/chemrxiv/article-details/67c68d98fa469535b9d93fe9'
  },
  {
    title: 'GuPT',
    description: "GuPT is a RAG chatbot system providing accurate and quick answers about Gothenburg University's courses and programs to help students access academic information effortlessly.",
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tech: ['Python', 'LangChain', 'Firecrawl', 'Gradio'],
    github: 'https://github.com/faerazo/GuPT',
    demo: 'https://huggingface.co/spaces/NilsDunlop/GuPT'
  },
  {
    title: 'Identifying Nearby Molecules through ECFP4 Fingerprint Bit Flipping',
    description: 'Explored the generation of structurally similar molecules from five COX-2 inhibitors using a transformer architecture. Supervised by AstraZeneca.',
    image: 'https://www.thoughtco.com/thmb/B6RDHcUBbbUYXz9IRPjTWMmwtUc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adenosine-triphosphate-molecule-545861163-58b5db205f9b586046e54553.jpg',
    tech: ['PyTorch', 'Pandas', 'Matplotlib', 'RDKit', 'Scikit-learn'],
    github: 'https://github.com/NilsDunlop/Flip2Mol'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}