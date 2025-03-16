import React from 'react';
import { GraduationCap} from 'lucide-react';

const education = [
  {
    degree: "Master's in Data Science and AI",
    school: "Gothenburg University - Chalmers University of Technology",
    period: "2023-2025",
    thesis: <React.Fragment>Currently working with the<span dangerouslySetInnerHTML={{ __html: "&nbsp;" }} /><a href="https://ailab.bio/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">AI Lab for Molecular Engineering (AIME)</a> on Ternary Complex Prediction </React.Fragment>,
    courses: [
      "Design of AI Systems",
      "Natural Language Processing",
      "Deep Learning",
      "Machine Learning",
      "Parallel Computing",
      "Data Structures & Algorithms",
    ],
    publications: [
      <React.Fragment key="pub1">
        Enhancing PROTAC Ternary Complex Prediction with Ligand Information in AlphaFold 3
        <span dangerouslySetInnerHTML={{ __html: "&nbsp;" }} />
        <a 
          href="https://chemrxiv.org/engage/chemrxiv/article-details/67c68d98fa469535b9d93fe9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 hover:underline"
        >
          (See more on ChemRxiv)
        </a>
      </React.Fragment>
    ]
  },
  {
    degree: "Master's in Data Analytics and Business Economics",
    school: "Lund University",
    period: "2021-2022",
    courses: [
      "Machine Learning",
      "Advanced Machine Learning",
      "Deep Learning and Artificial Intelligence Methods",
      "Data Visualization"
    ],
    publications: [
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

export default function Education() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-[9px] top-0">
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 mb-2 font-semibold">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    
                    {edu.thesis && (
                      <div className="mb-4">
                        <h4 className="text-white font-medium mb-2">Thesis</h4>
                        <div className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {edu.thesis}
                        </div>
                      </div>
                    )}
                    
                    <h4 className="text-white font-medium mb-2">Publications</h4>
                    <ul className="space-y-2 mb-4">
                      {edu.publications.map((publication, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2">•</span>
                          {publication}
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-white font-medium mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="bg-gray-700/50 text-blue-300 text-xs px-3 py-1 rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
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