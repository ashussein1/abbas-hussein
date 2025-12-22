import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Ab's Hotel Reservation System",
    tech: ['Java', 'JavaFX', 'Hibernate (JPA)', 'H2 Database', 'Google Guice', 'MVC', 'SQL'],
    description: [
      'Developed modern desktop-based Hotel Reservation System, replacing manual paper workflows',
      'Engineered secure 3-tier architecture with Hibernate and Google Guice for data integrity',
      'Implemented self-service Kiosk and Admin Dashboard with dynamic pricing, BCrypt security, and automated revenue reporting',
    ],
    category: 'Desktop App',
    color: '#ff6b6b',
    featured: true,
  },
  {
    title: 'LEGO-GO!',
    tech: ['EJS', 'Tailwind', 'JavaScript', 'Express JS', 'PostgreSQL', 'MongoDB'],
    description: [
      'Designed web application for showcasing and exploring Lego collections',
      'Developed responsive front-end using EJS templating and Tailwind CSS',
      'Implemented PostgreSQL database for efficient data management',
    ],
    category: 'Web App',
    color: '#4ecdc4',
    featured: false,
  },
  {
    title: 'Cash Check',
    tech: ['APIs', 'JavaScript', 'HTML/CSS'],
    description: [
      'Created currency converter utilizing external API for real-time exchange rates',
      'Designed and optimized user interface for seamless conversion experiences',
    ],
    category: 'Tool',
    color: '#ffe66d',
    featured: false,
  },
];

const ProjectsContent = () => {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          className={`p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${
            project.featured ? 'bg-white/10' : 'bg-white/5'
          }`}
          style={{
            borderLeftWidth: '3px',
            borderLeftColor: project.color,
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div 
                className="p-3 rounded-xl"
                style={{ background: `${project.color}20` }}
              >
                <FolderGit2 size={24} style={{ color: project.color }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-orbitron text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-0.5 text-xs bg-white/10 text-white/80 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <span 
                  className="text-xs font-mono"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github size={18} className="text-white/70" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ExternalLink size={18} className="text-white/70" />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-5">
            {project.description.map((item, i) => (
              <li 
                key={i}
                className="flex items-start gap-3 text-white/70 text-sm"
              >
                <ArrowRight size={14} style={{ color: project.color }} className="shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-lg"
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}

      {/* GitHub Link */}
      <motion.a
        href="https://github.com/ashussein1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/70 hover:text-white"
      >
        <Github size={18} />
        <span>View more projects on GitHub</span>
        <ArrowRight size={16} />
      </motion.a>
    </div>
  );
};

export default ProjectsContent;
