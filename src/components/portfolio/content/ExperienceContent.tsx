import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, ChevronDown, CheckCircle } from 'lucide-react';
import { useState } from 'react';

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
  },
];

const ExperienceContent = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          {/* Connector line */}
          {index < experiences.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-[calc(100%-40px)] bg-border/50" />
          )}

          <motion.div
            className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
              expandedIndex === index 
                ? 'bg-muted/80 border-primary/30' 
                : 'bg-muted/50 hover:bg-muted/70'
            } border border-border/50`}
            onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
            whileHover={{ x: 3 }}
          >
            {/* Header */}
            <div className="flex items-start gap-4">
              {/* Timeline dot */}
              <motion.div 
                className={`p-2.5 rounded-xl shrink-0 transition-all duration-300 ${
                  expandedIndex === index ? 'bg-primary/20' : 'bg-primary/10'
                }`}
                animate={{ scale: expandedIndex === index ? 1.05 : 1 }}
              >
                <Building2 size={22} className="text-primary" />
              </motion.div>
              
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {exp.type}
                  </span>
                </div>
                
                <p className="text-primary font-medium mt-1">
                  {exp.company}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary/70" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary/70" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground shrink-0"
              >
                <ChevronDown size={18} />
              </motion.div>
            </div>

            {/* Expandable content */}
            <motion.div
              initial={false}
              animate={{
                height: expandedIndex === index ? 'auto' : 0,
                opacity: expandedIndex === index ? 1 : 0,
                marginTop: expandedIndex === index ? 16 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceContent;