import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export const Courses = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "KURUKSHETRA UNIVERSITY",
      period: "07/2012 - 05/2016",
      location: "Kurukshetra, India"
    },
    {
      degree: "Senior Secondary",
      institution: "Minerva Public School, Assandh (Karnal)",
      period: "04/2011 - 03/2012",
      location: "HBSE, Haryana"
    },
    {
      degree: "Secondary",
      institution: "Minerva Public School, Assandh (Karnal)",
      period: "04/2009 - 03/2010",
      location: "HBSE, Haryana"
    }
  ];

  const courses = [
    "Basic CSharp Programming",
    "Advanced CSharp Programming",
    "Introduction to Generative AI",
    "Asp.Net Core Web API"
  ];

  return (
    <section id="education" className="py-24 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-indigo-400" /> Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <div className="text-lg text-indigo-300 font-medium mb-2">{edu.institution}</div>
                  <div className="flex justify-between items-center text-sm text-slate-400 mt-4 pt-4 border-t border-slate-700/50">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-sky-400" /> Certifications & Courses
            </h2>
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Pluralsight_Logo.svg" alt="Pluralsight" className="h-8 brightness-0 invert opacity-80" />
                <span className="text-xl font-medium text-slate-300 tracking-wide">Pluralsight</span>
              </div>
              <ul className="space-y-6">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg text-slate-200 font-medium">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
