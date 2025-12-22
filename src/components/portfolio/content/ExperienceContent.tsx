import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';
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
    color: '#ffe66d',
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
    color: '#4ecdc4',
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
    color: '#f38181',
  },
];

const ExperienceContent = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
              expandedIndex === index 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/5 border-white/10 hover:bg-white/8'
            }`}
            onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
            style={{
              borderLeftWidth: '3px',
              borderLeftColor: exp.color,
            }}
          >
            {/* Header */}
            <div className="flex items-start gap-4">
              <div 
                className="p-3 rounded-xl shrink-0"
                style={{ background: `${exp.color}20` }}
              >
                <Building2 size={24} style={{ color: exp.color }} />
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-orbitron text-lg font-bold text-white">
                    {exp.title}
                  </h3>
                  <span 
                    className="px-2 py-0.5 text-xs font-medium rounded-full"
                    style={{ 
                      background: `${exp.color}20`,
                      color: exp.color,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
                
                <p style={{ color: exp.color }} className="font-semibold text-lg mt-1">
                  {exp.company}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} style={{ color: exp.color }} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} style={{ color: exp.color }} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                className="text-white/40"
              >
                ▼
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
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white/80 mb-3 uppercase tracking-wide">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-white/70 text-sm"
                    >
                      <span style={{ color: exp.color }} className="mt-1 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceContent;
