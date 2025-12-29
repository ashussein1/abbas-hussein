import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, Zap, Target, Code2 } from 'lucide-react';

const AboutContent = () => {
  const stats = [
    { value: "3+", label: "Years Exp", icon: Zap },
    { value: "3.7", label: "GPA", icon: Award },
    { value: "15+", label: "Technologies", icon: Code2 },
  ];

  return (
    <div className="space-y-6">
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-primary/10">
            <Target size={18} className="text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">About Me</h3>
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate <span className="text-foreground font-medium">Software Engineer</span> and 
            AI Enthusiast with a strong foundation in software development, quality assurance, and 
            modern web technologies.
          </p>
          <p>
            Currently working at the Government of Ontario, I specialize in validating API functionality, 
            developing automated test cases, and streamlining development workflows. My experience spans 
            across frontend and backend technologies, with a keen eye for quality and user experience.
          </p>
          <p>
            I'm driven by the challenge of solving complex problems and building efficient, scalable solutions 
            that make a real impact.
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-3"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="relative text-center p-5 rounded-2xl bg-muted/50 border border-border/50 group hover:bg-muted/80 transition-colors"
          >
            <stat.icon size={18} className="mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-5 rounded-2xl bg-muted/50 border border-border/50"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-primary/10">
            <GraduationCap size={22} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground">Education</h3>
            <p className="text-sm text-muted-foreground">Academic Background</p>
          </div>
        </div>

        <div className="relative pl-5 border-l-2 border-primary/30">
          <div className="absolute left-0 top-0 w-2.5 h-2.5 -translate-x-[6px] rounded-full bg-primary" />
          
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-foreground">
              Seneca Polytechnic
            </h4>
            <p className="font-medium text-primary">
              Advanced Diploma
            </p>
            <p className="text-muted-foreground">
              Computer Programming and Analysis
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-muted border border-border/50 text-muted-foreground">
                <Calendar size={14} className="text-primary" />
                May 2023 – December 2025
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-primary/10 text-primary font-medium">
                <Award size={14} />
                GPA: 3.7/4.0
              </span>
            </div>

            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Toronto, Ontario
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;