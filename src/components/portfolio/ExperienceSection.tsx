import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Programmer Analyst',
    company: 'Government of Ontario',
    location: 'Toronto, ON',
    period: 'Sept 2024 – Aug 2025',
    bullets: [
      'Validated API functionality and backend data consistency using Postman and MySQL, improving defect detection accuracy by 25%',
      'Developed and automated 15+ end-to-end test cases using Cypress, reducing manual testing time by 30%',
      'Assisted in migration of all project workflows from Jira to Azure DevOps with 100% transition success rate',
      'Streamlined code review process by developing a PR auto-load template in Azure DevOps',
    ],
  },
  {
    title: 'Software Tester Intern',
    company: 'eShipper',
    location: 'Brampton, ON',
    period: 'May 2024 – Aug 2024',
    bullets: [
      "Assisted in 15 modules of eShipper's software to ensure high-quality deliverables",
      'Evaluated the user interface to provide valuable feedback for clarity and usability',
      'Developed and executed 100 test cases, resulting in 90% increase in user-friendliness',
      'Collaborated with 11 members of the development team to prioritize and resolve issues',
    ],
  },
  {
    title: 'QA Analyst Intern',
    company: 'ECNet Solutions Inc.',
    location: 'Toronto, ON',
    period: 'Feb 2024 – May 2024',
    bullets: [
      'Conducted 3 software reviews and requirements analysis weekly',
      'Developed 25 test cases and documented software defects effectively',
      'Contributed to project quality enhancement through valuable feedback and recommendations',
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-primary glow-red-sm mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 border-4 border-background z-10" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 box-glow-hover">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <Briefcase size={24} className="text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="font-orbitron text-lg font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-1.5 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
