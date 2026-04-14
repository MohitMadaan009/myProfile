import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import MohitImage from '../assets/MohitMaddan.jpg' 
export const Hero = () => {
  return (
    <div className="h-screen w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden relative">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-6 relative z-20 px-4"
      >
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl mb-4">
          <img
            src={MohitImage}
            alt="Mohit Madaan"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center text-white tracking-tight">
          Mohit Madaan
        </h1>

        <div className="w-[40rem] h-10 relative hidden md:block">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <p className="text-xl md:text-2xl text-slate-300 font-medium text-center mt-2 max-w-2xl leading-relaxed">
          Full Stack Developer
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <a href="#about" className="px-8 py-3 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors">
            Discover My Work
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
