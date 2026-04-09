import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out to me!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <a href="mailto:mohitmadaan0079@gmail.com" className="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg text-slate-400 mb-2">Email Me</h3>
              <p className="font-semibold text-lg text-white">mohitmadaan0079@gmail.com</p>
            </a>

            <a href="tel:+918860883797" className="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/80 hover:border-emerald-500/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg text-slate-400 mb-2">Call Me</h3>
              <p className="font-semibold text-lg text-white">+91 88608 83797</p>
            </a>

            <a href="https://linkedin.com/in/mohit-madaan-21m345589/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/80 hover:border-sky-500/50 transition-all group">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="text-lg text-slate-400 mb-2">Connect</h3>
              <p className="font-semibold text-lg text-white">LinkedIn Profile</p>
            </a>

            <div className="flex flex-col items-center justify-center bg-slate-900 border border-slate-800 p-8 rounded-3xl">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 text-slate-300">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg text-slate-400 mb-2">Location</h3>
              <p className="font-semibold text-lg text-white text-center">Sector 150, Noida, 201310</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center text-slate-600 mt-12 pb-8 border-t border-slate-900/50 pt-8 absolute bottom-0 w-full font-medium">
        © {new Date().getFullYear()} Mohit Madaan. All rights reserved.
      </div>
    </section>
  );
};
