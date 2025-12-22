import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, Zap } from 'lucide-react';

const AboutContent = () => {
  const stats = [
    { value: "3+", label: "Experiences" },
    { value: "3.7", label: "GPA" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <div className="space-y-8">
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#ff6b6b]/20 rounded-lg">
            <Zap size={20} className="text-[#ff6b6b]" />
          </div>
          <h3 className="font-orbitron text-lg font-bold text-white">My Story</h3>
        </div>

        <p className="text-white/90 leading-relaxed text-lg">
          I'm a passionate <span className="text-[#ff6b6b] font-semibold">Software Engineer</span> and 
          AI Enthusiast with a strong foundation in software development, quality assurance, and 
          modern web technologies.
        </p>
        <p className="text-white/70 leading-relaxed">
          Currently working at the Government of Ontario, I specialize in validating API functionality, 
          developing automated test cases, and streamlining development workflows. My experience spans 
          across frontend and backend technologies, with a keen eye for quality and user experience.
        </p>
        <p className="text-white/70 leading-relaxed">
          I'm driven by the challenge of solving complex problems and building efficient, scalable solutions 
          that make a real impact. Whether it's crafting pixel-perfect UIs or optimizing backend systems, 
          I bring dedication and creativity to every project.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="text-3xl font-orbitron font-bold text-[#ff6b6b]">{stat.value}</div>
            <div className="text-xs text-white/60 uppercase tracking-wide mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-2xl bg-white/5 border border-white/10"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-[#ff6b6b]/20 rounded-xl">
            <GraduationCap size={28} className="text-[#ff6b6b]" />
          </div>
          <div>
            <h3 className="font-orbitron text-lg font-bold text-white">Education</h3>
            <p className="text-sm text-white/60">Academic Background</p>
          </div>
        </div>

        <div className="relative pl-6 border-l-2 border-[#ff6b6b]/40">
          <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-[#ff6b6b] rounded-full" />
          
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xl text-white">
              Seneca Polytechnic
            </h4>
            <p className="text-[#ff6b6b] font-semibold text-lg">
              Advanced Diploma
            </p>
            <p className="text-white/70">
              Computer Programming and Analysis
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-sm text-white/70">
                <Calendar size={14} className="text-[#ff6b6b]" />
                May 2023 – December 2025
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff6b6b]/20 rounded-lg text-sm text-[#ff6b6b] font-semibold">
                <Award size={14} />
                GPA: 3.7/4.0
              </span>
            </div>

            <p className="text-white/60 text-sm flex items-center gap-2">
              <MapPin size={14} className="text-[#ff6b6b]" />
              Toronto, Ontario
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
