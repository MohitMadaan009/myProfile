import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
            <p className="text-lg md:text-xl leading-relaxed text-slate-300">
              I am a proficient Full Stack Developer with over 5 years of experience in designing and developing high-quality web applications. I am skilled in collaborating with cross-functional teams, delivering client-focused solutions, and contributing to efficient project execution. I continuously seek opportunities to leverage my expertise to drive success in dynamic and challenging environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
