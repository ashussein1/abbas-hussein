import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Programmer Analyst',
    company: 'Government of Ontario',
    location: 'Toronto, ON',
    period: 'Sept 2024 – Aug 2025',
    type: 'Full-time',
    bullets: [
      'Validated API functionality and backend data consistency using Postman and MySQL, improving defect detection accuracy by 25%',
      'Developed and automated 15+ end-to-end test cases using Cypress, reducing manual testing time by 30%',
      'Assisted in migration of all project workflows from Jira to Azure DevOps with 100% transition success rate',
      'Streamlined code review process by developing a PR auto-load template in Azure DevOps',
    ],
    color: 'from-red-500 to-primary',
  },
  {
    title: 'Software Tester Intern',
    company: 'eShipper',
    location: 'Brampton, ON',
    period: 'May 2024 – Aug 2024',
    type: 'Internship',
    bullets: [
      "Assisted in 15 modules of eShipper's software to ensure high-quality deliverables",
      'Evaluated the user interface to provide valuable feedback for clarity and usability',
      'Developed and executed 100 test cases, resulting in 90% increase in user-friendliness',
      'Collaborated with 11 members of the development team to prioritize and resolve issues',
    ],
    color: 'from-orange-500 to-primary',
  },
  {
    title: 'QA Analyst Intern',
    company: 'ECNet Solutions Inc.',
    location: 'Toronto, ON',
    period: 'Feb 2024 – May 2024',
    type: 'Internship',
    bullets: [
      'Conducted 3 software reviews and requirements analysis weekly',
      'Developed 25 test cases and documented software defects effectively',
      'Contributed to project quality enhancement through valuable feedback and recommendations',
    ],
    color: 'from-yellow-500 to-primary',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5">
            <Briefcase size={16} className="text-primary" />
            <span className="text-sm font-mono text-primary">CAREER PATH</span>
          </div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border overflow-hidden hidden md:block">
              <motion.div 
                className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
                style={{ height: lineHeight }}
              />
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 hidden md:block">
                  <div className="w-4 h-4 -translate-x-1/2 rounded-full bg-background border-2 border-primary z-10 relative">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                  </div>
                </div>

                {/* Card */}
                <div className="md:ml-20">
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                      expandedIndex === index 
                        ? 'border-primary bg-card/80' 
                        : 'border-border bg-card/50 hover:border-primary/50'
                    }`}
                    layout
                  >
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`} />

                    {/* Header - Always visible */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                            <Building2 size={24} className="text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-orbitron text-lg font-bold text-foreground">
                                {exp.title}
                              </h3>
                              <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                {exp.type}
                              </span>
                            </div>
                            <p className="text-primary font-semibold text-lg">{exp.company}</p>
                            <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} className="text-primary" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={14} className="text-primary" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                          <ChevronDown size={20} className="text-muted-foreground" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expandable content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? 'auto' : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-border">
                          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.bullets.map((bullet, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <span className="text-primary mt-1.5 shrink-0">▹</span>
                                <span>{bullet}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
