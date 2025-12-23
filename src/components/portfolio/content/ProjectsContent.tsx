import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, ArrowRight, Star } from 'lucide-react';

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
    color: '#00ff88',
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
    color: '#00d4ff',
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
    color: '#ffaa00',
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
          className={`relative p-6 rounded-xl group overflow-hidden ${
            project.featured ? 'ring-1' : ''
          }`}
          style={{
            background: project.featured ? `${project.color}08` : 'hsl(var(--card))',
            border: '1px solid',
            borderColor: project.featured ? `${project.color}40` : 'hsl(var(--border))',
            ['--tw-ring-color' as any]: project.featured ? project.color : 'transparent',
          }}
        >
          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 70%)`,
            }}
          />

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div 
                className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: `${project.color}20` }}
              >
                <FolderGit2 size={24} style={{ color: project.color }} />
              </motion.div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-orbitron text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full font-rajdhani"
                      style={{ background: `${project.color}20`, color: project.color }}
                    >
                      <Star size={12} /> Featured
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg transition-colors"
                style={{ 
                  background: 'hsl(var(--muted))',
                }}
              >
                <Github size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg transition-colors"
                style={{ 
                  background: 'hsl(var(--muted))',
                }}
              >
                <ExternalLink size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <ul className="relative z-10 space-y-2 mb-5">
            {project.description.map((item, i) => (
              <li 
                key={i}
                className="flex items-start gap-3 text-muted-foreground text-sm font-rajdhani"
              >
                <ArrowRight size={14} style={{ color: project.color }} className="shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 text-xs font-mono rounded-lg"
                style={{
                  background: `${project.color}15`,
                  color: project.color,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {tech}
              </motion.span>
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
        whileHover={{ scale: 1.02, y: -2 }}
        className="flex items-center justify-center gap-3 p-4 rounded-xl transition-all group"
        style={{
          background: 'hsl(var(--card))',
          border: '1px solid hsl(var(--border))',
        }}
      >
        <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-muted-foreground group-hover:text-foreground transition-colors font-rajdhani">
          View more projects on GitHub
        </span>
        <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </motion.a>
    </div>
  );
};

export default ProjectsContent;
