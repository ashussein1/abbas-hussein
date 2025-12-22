import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'HTML/CSS', 'JavaScript', 'Python', 'C/C++', 'SQL'],
    color: '#ff6b6b',
  },
  {
    title: 'Frameworks',
    icon: Layout,
    skills: ['JavaFX', 'Hibernate (JPA)', 'Tailwind', 'Bootstrap', 'React', 'Node.js', 'Express', 'WordPress'],
    color: '#4ecdc4',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'Oracle', 'PL/SQL', 'PostgreSQL', 'H2 Database', 'MySQL'],
    color: '#ffe66d',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Jira', 'Azure DevOps', 'PowerShell', 'VS Code', 'Visual Studio', 'Postman', 'Cypress', 'Google Guice'],
    color: '#95e1d3',
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    skills: ['SDLC', 'OOP', 'MVC Architecture', 'Data Structures & Algorithms', 'Web Services', 'REST APIs', 'Dependency Injection'],
    color: '#f38181',
  },
];

const SkillsContent = () => {
  return (
    <div className="space-y-6">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="p-2.5 rounded-xl"
              style={{ background: `${category.color}20` }}
            >
              <category.icon size={22} style={{ color: category.color }} />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-white">
              {category.title}
            </h3>
            <span className="ml-auto text-xs text-white/40 font-mono">
              {category.skills.length} skills
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default hover:scale-105"
                style={{
                  background: `${category.color}15`,
                  color: category.color,
                  border: `1px solid ${category.color}30`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-white/50 text-sm pt-4"
      >
        Constantly learning and expanding my tech stack ✨
      </motion.p>
    </div>
  );
};

export default SkillsContent;
