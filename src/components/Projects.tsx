import { motion } from "framer-motion";
import { FolderGit2, Users, Wrench } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Kastle Multifamily",
      role: "Sr Software Engineer",
      duration: "01/2023 - Present",
      teamSize: 8,
      tech: "Angular 18, .NET Core, SQL Server",
      tools: "Visual Code, Visual Studio 2022",
      description: "The Kastle Multifamily web portal streamlines resident management by enabling seamless onboarding, lease extensions, access modifications, credential replacements, visitor management, temporary day passes, remote door unlocks, and adjustable lock schedules.",
      responsibilities: [
        "Implement Dependency Injection and perform unit testing.",
        "Integrate Sonar Cloud with Azure Pipeline builds to ensure code quality.",
        "Collaborate on requirements, design, development, testing, and deployment.",
        "Optimize code performance and provide engineering support for customer systems."
      ],
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Kastle Essence",
      role: "Sr Software Engineer",
      duration: "01/2023 - Present",
      teamSize: 3,
      tech: "Angular 18, .NET Core, SQL Server, C#, GitHub, Entity Framework",
      tools: "Visual Studio 2022, Visual Code",
      description: "Developed and maintained an application that processes signals initiated by the Rabbit Router and visualizes them on a floor plan interface, enabling users to take contextual actions such as adding comments or dismissing alerts. Implemented UI-based controls for locking and unlocking entrances. Integrated Essence card reader logging to display real-time card swipe entries.",
      responsibilities: [
        "Worked in an Agile environment to develop application modules.",
        "Resolve production issues and execute functional testing.",
        "Ensure system reliability and quality."
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl group"
              >
                <div className="lg:w-2/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>

                <div className="lg:w-3/5 p-8 lg:p-12">
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-400 mb-6 border-b border-slate-800 pb-6">
                    <span className="flex items-center gap-1.5"><FolderGit2 className="w-4 h-4 text-sky-400" /> {project.role}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-emerald-400" /> Team of {project.teamSize}</span>
                    <span className="flex items-center gap-1.5"><Wrench className="w-4 h-4 text-amber-400" /> {project.tech}</span>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2 text-slate-400 list-disc ml-5 pointer-events-none">
                      {project.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
