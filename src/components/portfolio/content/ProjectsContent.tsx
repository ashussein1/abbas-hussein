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
    featured: false,
  },
];

const ProjectsContent = () => {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative p-5 rounded-2xl group overflow-hidden ${
            project.featured 
              ? 'bg-primary/5 border-primary/30' 
              : 'bg-muted/50 hover:bg-muted/70'
          } border border-border/50 transition-colors`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div 
                className="p-2.5 rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-105"
              >
                <FolderGit2 size={22} className="text-primary" />
              </motion.div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">
                      <Star size={10} /> Featured
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={16} />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {project.description.map((item, i) => (
              <li 
                key={i}
                className="flex items-start gap-3 text-muted-foreground text-sm"
              >
                <ArrowRight size={14} className="text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.03 }}
                className="px-2.5 py-1 text-xs rounded-lg bg-background/80 border border-border/50 text-foreground/70"
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
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.01 }}
        className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted/70 transition-colors group"
      >
        <Github size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
          View more projects on GitHub
        </span>
        <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </motion.a>
    </div>
  );
};

export default ProjectsContent;