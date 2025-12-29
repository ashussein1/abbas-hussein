import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, User, Zap, Briefcase, Rocket, Mail } from 'lucide-react';
import AboutContent from './content/AboutContent';
import SkillsContent from './content/SkillsContent';
import ExperienceContent from './content/ExperienceContent';
import ProjectsContent from './content/ProjectsContent';
import ContactContent from './content/ContactContent';

type SectionType = 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface SectionPanelProps {
  activeSection: SectionType | null;
  onClose: () => void;
}

const sectionConfig: Record<SectionType, { title: string; subtitle: string; icon: any }> = {
  about: { title: 'About', subtitle: 'Personal Information', icon: User },
  skills: { title: 'Skills', subtitle: 'Technical Capabilities', icon: Zap },
  experience: { title: 'Experience', subtitle: 'Work History', icon: Briefcase },
  projects: { title: 'Projects', subtitle: 'Featured Work', icon: Rocket },
  contact: { title: 'Contact', subtitle: 'Get In Touch', icon: Mail },
};

const SectionPanel = ({ activeSection, onClose }: SectionPanelProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutContent />;
      case 'skills':
        return <SkillsContent />;
      case 'experience':
        return <ExperienceContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return null;
    }
  };

  if (!activeSection) return null;

  const config = sectionConfig[activeSection];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop with blur - matches main page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 backdrop-blur-xl bg-background/80"
        />

        {/* Panel */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-2xl"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-card/80 backdrop-blur-sm border-b border-border/50">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={18} />
              </motion.button>
              
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-xl text-foreground tracking-tight">
                    {config.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {config.subtitle}
                  </p>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </motion.button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-88px)] p-6 md:p-8">
            {renderContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionPanel;