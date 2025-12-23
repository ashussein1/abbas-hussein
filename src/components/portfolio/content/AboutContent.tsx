import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, Zap, Target, Code2 } from 'lucide-react';

const AboutContent = () => {
  const stats = [
    { value: "3+", label: "Years Exp", icon: Zap },
    { value: "3.7", label: "GPA", icon: Award },
    { value: "15+", label: "Technologies", icon: Code2 },
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
          <div className="p-2 rounded-lg" style={{ background: '#00d4ff20' }}>
            <Target size={20} style={{ color: '#00d4ff' }} />
          </div>
          <h3 className="font-orbitron text-lg font-bold text-foreground">ABOUT ME</h3>
        </div>

        <div className="space-y-4 text-muted-foreground font-rajdhani text-lg leading-relaxed">
          <p>
            I'm a passionate <span className="text-primary font-semibold">Software Engineer</span> and 
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
            that make a real impact. Whether it's crafting pixel-perfect UIs or optimizing backend systems, 
            I bring dedication and creativity to every project.
          </p>
        </div>
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
            className="relative text-center p-6 rounded-xl overflow-hidden group"
            style={{
              background: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent)',
              }}
            />
            <stat.icon size={20} className="mx-auto mb-2 text-primary" />
            <div className="text-3xl font-orbitron font-bold text-primary">{stat.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1 font-rajdhani">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-xl"
        style={{
          background: 'hsl(var(--card))',
          border: '1px solid hsl(var(--border))',
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl" style={{ background: '#00d4ff20' }}>
            <GraduationCap size={28} style={{ color: '#00d4ff' }} />
          </div>
          <div>
            <h3 className="font-orbitron text-lg font-bold text-foreground">EDUCATION</h3>
            <p className="text-sm text-muted-foreground font-rajdhani">Academic Background</p>
          </div>
        </div>

        <div className="relative pl-6 border-l-2" style={{ borderColor: '#00d4ff40' }}>
          <div 
            className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full"
            style={{ background: '#00d4ff' }}
          />
          
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xl text-foreground">
              Seneca Polytechnic
            </h4>
            <p className="font-semibold text-lg" style={{ color: '#00d4ff' }}>
              Advanced Diploma
            </p>
            <p className="text-muted-foreground font-rajdhani">
              Computer Programming and Analysis
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-rajdhani"
                style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}
              >
                <Calendar size={14} style={{ color: '#00d4ff' }} />
                May 2023 – December 2025
              </span>
              <span 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold"
                style={{ background: '#00d4ff20', color: '#00d4ff' }}
              >
                <Award size={14} />
                GPA: 3.7/4.0
              </span>
            </div>

            <p className="text-muted-foreground text-sm flex items-center gap-2 font-rajdhani">
              <MapPin size={14} style={{ color: '#00d4ff' }} />
              Toronto, Ontario
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
