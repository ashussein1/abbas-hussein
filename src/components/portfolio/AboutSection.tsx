import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-primary glow-red-sm mb-4">
              ABOUT ME
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Junior Programmer Analyst</span> and 
                Full-Stack Developer with a strong foundation in software development, quality assurance, and 
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
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-8 box-glow-hover transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap size={32} className="text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">
                  Seneca Polytechnic
                </h4>
                <p className="text-primary font-medium">
                  Advanced Diploma in Computer Programming and Analysis
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    May 2023 – December 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    GPA: 3.7/4.0
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mt-4">
                  Toronto, Ontario
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
