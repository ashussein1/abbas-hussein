import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, User, Zap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div 
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5"
          >
            <User size={16} className="text-primary" />
            <span className="text-sm font-mono text-primary">WHO AM I</span>
          </motion.div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text Card */}
          <motion.div 
            style={{ x: x1, opacity }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap size={24} className="text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-foreground">My Story</h3>
              </div>

              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Software Engineer</span> and 
                AI Enthusiast with a strong foundation in software development, quality assurance, and 
                modern web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently working at the Government of Ontario, I specialize in validating API functionality, 
                developing automated test cases, and streamlining development workflows. My experience spans 
                across frontend and backend technologies, with a keen eye for quality and user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm driven by the challenge of solving complex problems and building efficient, scalable solutions 
                that make a real impact. Whether it's crafting pixel-perfect UIs or optimizing backend systems, 
                I bring dedication and creativity to every project.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {[
                  { value: "3+", label: "Experiences" },
                  { value: "3.7", label: "GPA" },
                  { value: "10+", label: "Technologies" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-orbitron font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            style={{ x: x2, opacity }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>

              {/* Education Timeline */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full" />
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full animate-ping opacity-50" />

                <div className="space-y-4">
                  <div>
                    <h4 className="font-orbitron font-bold text-xl text-foreground">
                      Seneca Polytechnic
                    </h4>
                    <p className="text-primary font-semibold text-lg">
                      Advanced Diploma
                    </p>
                    <p className="text-muted-foreground">
                      Computer Programming and Analysis
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                      <Calendar size={14} className="text-primary" />
                      May 2023 – December 2025
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg text-sm text-primary font-semibold">
                      <Award size={14} />
                      GPA: 3.7/4.0
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    📍 Toronto, Ontario
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  "Building the future, one line of code at a time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
