import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FolderGit2, ExternalLink, Github, Layers, ArrowRight } from 'lucide-react';

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
    color: 'from-red-500/20 to-orange-500/20',
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
    category: 'Web App',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    title: 'Cash Check',
    tech: ['APIs', 'JavaScript', 'HTML/CSS'],
    description: [
      'Created currency converter utilizing external API for real-time exchange rates',
      'Designed and optimized user interface for seamless conversion experiences',
      'Demonstrated proficiency in API integration and web development',
    ],
    category: 'Tool',
    color: 'from-yellow-500/20 to-green-500/20',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            <Layers size={16} className="text-primary" />
            <span className="text-sm font-mono text-primary">SHOWCASE</span>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid - Bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Project - Large */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoveredProject(0)}
            onMouseLeave={() => setHoveredProject(null)}
            className="lg:row-span-2 group relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-4 bg-primary/10 rounded-2xl"
                    animate={{ rotate: hoveredProject === 0 ? 5 : 0 }}
                  >
                    <FolderGit2 size={32} className="text-primary" />
                  </motion.div>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                    {projects[0].category}
                  </span>
                </div>
                <div className="flex gap-2">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <Github size={18} className="text-muted-foreground hover:text-primary" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink size={18} className="text-muted-foreground hover:text-primary" />
                  </motion.button>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {projects[0].title}
              </h3>

              {/* Description */}
              <ul className="space-y-3 mb-8 flex-grow">
                {projects[0].description.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <ArrowRight size={16} className="text-primary shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-muted/50 text-primary text-sm font-mono rounded-lg border border-primary/20 hover:border-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.15 }}
              onMouseEnter={() => setHoveredProject(index + 1)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <FolderGit2 size={20} className="text-primary" />
                    </div>
                    <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.description.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <ArrowRight size={14} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted/50 text-primary text-xs font-mono rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/ashussein1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
            <span>View more projects on GitHub</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
