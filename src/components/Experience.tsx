import React from 'react';
import { Briefcase} from 'lucide-react';

const experiences = [
  {
    title: "AI Engineer",
    company: "Computer Science and Engineering Department, GU-Chalmers 🇸🇪",
    period: "March 2025 - Present",
    achievements: [
      "Developed a RAG-based chatbot for student queries regarding courses in the Computer Science and Engineering (CSE) Department, which has been selected for further development and deployment across the department.",
    ]
  },
  {
    title: "Data Analyst-Data Engineer",
    company: "Essity 🇸🇪",
    period: "June 2022 - Present",
    achievements: [
    ]
  },
  {
    title: "Master Thesis Student - Data Science Department",
    company: "TetraPak 🇸🇪",
    period: "April 2022 - June 2022",
    achievements:
      [
        <React.Fragment key="pub2">
          Classification of Premium and Non-Premium Products using XGBoost and Logistic Regression
          <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
          <a 
            href="https://lup.lub.lu.se/student-papers/search/publication/9087706" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline"
          >
            (See more on LUP)
          </a>
        </React.Fragment>
      ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-[9px] top-0">
                    <Briefcase className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400 mb-2 font-semibold">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}