import React from 'react';
import { 
  Code2, Database, Cloud, Brain,
  BarChart, GitBranch, Terminal, Server
} from 'lucide-react';

const skills = [
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "JavaScript", "SQL"]
  },
  {
    category: "ML/AI Frameworks",
    icon: Brain,
    items: ["TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    category: "Data Processing",
    icon: Database,
    items: ["Pandas", "NumPy", "PySpark"]
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Azure"]
  },
  {
    category: "Visualization",
    icon: BarChart,
    items: ["Tableau", "Power BI", "D3.js", "Seaborn", "Matplotlib"]
  },
  {
    category: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub"]
  },
  {
    category: "Development Tools",
    icon: Terminal,
    items: ["Docker", "Linux", "SLURM"]
  },
  {
    category: "Big Data",
    icon: Server,
    items: ["Databricks", "Apache Spark"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-gray-700/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-700/70 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}