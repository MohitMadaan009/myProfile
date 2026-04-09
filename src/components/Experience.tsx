import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

          <div className="relative border-l-2 border-indigo-500 ml-4 md:ml-0 md:pl-0">
            <div className="mb-10 ml-8 md:ml-10 relative">
              <div className="absolute -left-10 md:-left-12 mt-1.5 bg-indigo-500 w-4 h-4 rounded-full border-4 border-slate-900 box-content"></div>

              <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-700/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-indigo-400" />
                      Globallogic
                    </h3>
                    <p className="text-lg text-indigo-300 font-medium">(On Payroll of Softgigs Solutions)</p>
                  </div>
                  <div className="mt-2 md:mt-0 bg-slate-700/50 px-4 py-2 rounded-full text-sm font-medium text-slate-300 self-start md:self-auto border border-slate-600">
                    09/2021 - Present | Noida, India
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-slate-200 mb-3">Roles & Responsibilities:</h4>
                  <ul className="space-y-3 text-slate-300 list-disc ml-5">
                    <li>Integrated Umbraco CMS/CRM into enterprise portals, enabling business users to manage dynamic content independently without application redeployment or downtime, resulting in increased productivity, reduced time-to-market, and lower operational and maintenance costs.</li>
                    <li>Architected, developed, and maintained enterprise-grade web applications using ASP.NET Core, Web API, Angular, Azure, and MS SQL Server, ensuring high performance, scalability, and security.</li>
                    <li>Actively engaged with clients to understand their requirements, translating business needs into technical solutions. Ensured client satisfaction by ensuring UAT was defined simultaneously.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Add more timeline items here if needed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
