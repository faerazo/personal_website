import React from 'react';
import { Briefcase} from 'lucide-react';

const experiences = [
  {
    title: "Corporate Credit Assistant Manager",
    company: "Produbanco 🇪🇨",
    period: "October 2018 - July 2021",
    achievements: [
      "Started as a Corporate Credit Analyst.",
      "Improved credit risk assessment accuracy during the pandemic by designing and implementing a real-time monitoring dashboard that enabled data-driven decision-making."
    ]
  },
  {
    title: "M&A, Valuation & Business Modelling Analyst",
    company: "Ernst & Young 🇪🇨",
    period: "December 2016 - October 2018",
    achievements: [
      "Led a financial due diligence for an US-based company looking for a stake in a Ecuadorian healthcare company.",
      "Performed a valuation for companies in the oil and gas, telecommunications and financial services sectors."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Finance Experience</h2>
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