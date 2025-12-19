import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Ab's Hotel Reservation System",
    tech: ['Java', 'JavaFX', 'Hibernate (JPA)', 'H2 Database', 'Google Guice', 'MVC', 'SQL'],
    description: [
      'Developed modern desktop-based Hotel Reservation System, replacing manual paper workflows',
      'Engineered secure 3-tier architecture with Hibernate and Google Guice for data integrity',
      'Implemented self-service Kiosk and Admin Dashboard with dynamic pricing, BCrypt security, and automated revenue reporting',
    ],
  },
  {
    title: 'LEGO-GO!',
    tech: ['EJS', 'Tailwind', 'JavaScript', 'Express JS', 'PostgreSQL', 'MongoDB'],
    description: [
      'Designed web application for showcasing and exploring Lego collections',
      'Developed responsive front-end using EJS templating and Tailwind CSS',
      'Integrated Express.js for routing and server-side logic',
      'Implemented PostgreSQL database for efficient data management',
      'Built RESTful routes for adding, editing, and deleting LEGO sets',
    ],
  },
  {
    title: 'Cash Check',
    tech: ['APIs', 'JavaScript', 'HTML/CSS'],
    description: [
      'Created currency converter utilizing external API for real-time exchange rates',
      'Designed and optimized user interface for seamless conversion experiences',
      'Demonstrated proficiency in API integration and web development',
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-primary glow-red-sm mb-4">
              PROJECTS
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group flex flex-col box-glow-hover"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <FolderGit2 size={28} className="text-primary" />
                  </div>
                  <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-primary text-xs font-mono rounded border border-primary/30"
                    >
                      {tech}
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

export default ProjectsSection;
