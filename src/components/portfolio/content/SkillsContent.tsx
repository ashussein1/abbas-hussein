import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Python', 'C/C++', 'SQL'],
  },
  {
    title: 'Frameworks',
    icon: Layout,
    skills: ['JavaFX', 'Hibernate (JPA)', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'Bootstrap', 'WordPress'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'H2 Database', 'PL/SQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Jira', 'Azure DevOps', 'VS Code', 'Postman', 'Cypress', 'Google Guice', 'PowerShell'],
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    skills: ['SDLC', 'OOP', 'MVC Architecture', 'REST APIs', 'Data Structures', 'Algorithms', 'Dependency Injection', 'Agile'],
  },
];

const SkillsContent = () => {
  return (
    <div className="space-y-4">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: categoryIndex * 0.08 }}
          className="p-5 rounded-2xl bg-muted/50 border border-border/50 group hover:bg-muted/80 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
              <category.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">
              {category.title}
            </h3>
            <span className="ml-auto text-xs text-muted-foreground">
              {category.skills.length} skills
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: categoryIndex * 0.08 + skillIndex * 0.02 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-background/80 border border-border/50 text-foreground/80 hover:text-foreground hover:border-primary/30 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center pt-4"
      >
        <p className="text-muted-foreground text-sm">
          Constantly learning and expanding my tech stack
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsContent;