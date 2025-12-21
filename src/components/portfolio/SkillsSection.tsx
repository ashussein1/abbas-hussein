import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Layout, Database, Wrench, Lightbulb, ChevronRight } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'HTML/CSS', 'JavaScript', 'Python', 'C/C++', 'SQL'],
    gradient: 'from-red-500/20 via-primary/10 to-transparent',
  },
  {
    title: 'Frameworks',
    icon: Layout,
    skills: ['JavaFX', 'Hibernate (JPA)', 'Tailwind', 'Bootstrap', 'React', 'Node.js', 'Express', 'WordPress'],
    gradient: 'from-orange-500/20 via-primary/10 to-transparent',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'Oracle', 'PL/SQL', 'PostgreSQL', 'H2 Database', 'MySQL'],
    gradient: 'from-yellow-500/20 via-primary/10 to-transparent',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Jira', 'Azure DevOps', 'PowerShell', 'VS Code', 'Visual Studio', 'Postman', 'Cypress', 'Google Guice'],
    gradient: 'from-green-500/20 via-primary/10 to-transparent',
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    skills: ['SDLC', 'OOP', 'MVC Architecture', 'Data Structures & Algorithms', 'Web Services', 'REST APIs', 'Dependency Injection'],
    gradient: 'from-blue-500/20 via-primary/10 to-transparent',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5">
            <Code2 size={16} className="text-primary" />
            <span className="text-sm font-mono text-primary">TECH ARSENAL</span>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Skills Carousel/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-xl"
                      animate={{ 
                        scale: hoveredCategory === index ? 1.1 : 1,
                        rotate: hoveredCategory === index ? 5 : 0 
                      }}
                    >
                      <category.icon size={24} className="text-primary" />
                    </motion.div>
                    <h3 className="font-orbitron text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
                  />
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-muted/50 text-muted-foreground text-sm rounded-lg border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill count */}
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {category.skills.length} technologies
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(category.skills.length, 5) }).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 rounded-full bg-primary/50"
                        style={{ opacity: 0.3 + (i * 0.15) }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Constantly learning and expanding my tech stack
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
