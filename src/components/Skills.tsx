import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Settings } from "lucide-react";

export const Skills = () => {
  const skills = [
    { name: ".NET", category: "Backend" },
    { name: ".NET Core", category: "Backend" },
    { name: "ASP.NET Core Web API", category: "Backend" },
    { name: "C#", category: "Language" },
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "MSSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Unit Testing", category: "Tools" },
    { name: "GitHub Copilot", category: "Tools" }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 px-6 py-4 rounded-xl flex items-center gap-3 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-default shadow-lg"
              >
                {skill.category === 'Frontend' && <Layout className="w-5 h-5 text-sky-400" />}
                {skill.category === 'Backend' && <Server className="w-5 h-5 text-indigo-400" />}
                {skill.category === 'Database' && <Database className="w-5 h-5 text-teal-400" />}
                {skill.category === 'Language' && <Code2 className="w-5 h-5 text-amber-400" />}
                {skill.category === 'Tools' && <Settings className="w-5 h-5 text-rose-400" />}
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
