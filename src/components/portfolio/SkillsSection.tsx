import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layout, Database, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'HTML/CSS', 'JavaScript', 'Python', 'C/C++', 'SQL'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Frameworks',
    icon: Layout,
    skills: ['JavaFX', 'Hibernate (JPA)', 'Tailwind', 'Bootstrap', 'React', 'Node.js', 'Express', 'WordPress'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'Oracle', 'PL/SQL', 'PostgreSQL', 'H2 Database', 'MySQL'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Jira', 'Azure DevOps', 'PowerShell', 'VS Code', 'Visual Studio', 'Postman', 'Cypress', 'Google Guice'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    title: 'Other',
    icon: Lightbulb,
    skills: ['SDLC', 'OOP', 'MVC Architecture', 'Data Structures & Algorithms', 'Web Services', 'REST APIs', 'Dependency Injection'],
    color: 'from-primary/20 to-primary/5',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-primary glow-red-sm mb-4">
              TECHNICAL SKILLS
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-orbitron text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-md border border-border hover:border-primary hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
