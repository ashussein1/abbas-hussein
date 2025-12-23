import { motion } from 'framer-motion';
import { Code2, Layout, Database, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'HTML/CSS', 'JavaScript', 'TypeScript', 'Python', 'C/C++', 'SQL'],
    color: '#00d4ff',
  },
  {
    title: 'Frameworks',
    icon: Layout,
    skills: ['JavaFX', 'Hibernate (JPA)', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'Bootstrap', 'WordPress'],
    color: '#ff00aa',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'H2 Database', 'PL/SQL'],
    color: '#ffaa00',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Jira', 'Azure DevOps', 'VS Code', 'Postman', 'Cypress', 'Google Guice', 'PowerShell'],
    color: '#00ff88',
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    skills: ['SDLC', 'OOP', 'MVC Architecture', 'REST APIs', 'Data Structures', 'Algorithms', 'Dependency Injection', 'Agile'],
    color: '#aa66ff',
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
          className="p-5 rounded-xl group relative overflow-hidden"
          style={{
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
          }}
        >
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${category.color}10, transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex items-center gap-3 mb-4">
            <div 
              className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110"
              style={{ background: `${category.color}20` }}
            >
              <category.icon size={22} style={{ color: category.color }} />
            </div>
            <h3 className="font-orbitron text-lg font-bold text-foreground">
              {category.title}
            </h3>
            <span className="ml-auto text-xs text-muted-foreground font-mono">
              {category.skills.length} skills
            </span>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium font-rajdhani transition-all duration-200 cursor-default"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center pt-4"
      >
        <p className="text-muted-foreground text-sm font-rajdhani">
          Constantly learning and expanding my tech stack
        </p>
        <div className="mt-2 flex justify-center gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsContent;
