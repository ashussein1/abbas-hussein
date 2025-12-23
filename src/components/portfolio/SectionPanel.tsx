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

const sectionConfig: Record<SectionType, { title: string; subtitle: string; color: string; icon: any }> = {
  about: { title: 'PROFILE', subtitle: 'Personal Information', color: '#00d4ff', icon: User },
  skills: { title: 'ARSENAL', subtitle: 'Technical Capabilities', color: '#ff00aa', icon: Zap },
  experience: { title: 'MISSIONS', subtitle: 'Work Experience', color: '#ffaa00', icon: Briefcase },
  projects: { title: 'PROJECTS', subtitle: 'Featured Builds', color: '#00ff88', icon: Rocket },
  contact: { title: 'CONNECT', subtitle: 'Get In Touch', color: '#aa66ff', icon: Mail },
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
        {/* Backdrop with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--background) / 0.95), hsl(var(--background) / 0.85))',
          }}
        />

        {/* Panel */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl glass"
          style={{
            boxShadow: `0 0 60px ${config.color}20, 0 0 120px ${config.color}10`,
          }}
        >
          {/* Animated border */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: `1px solid ${config.color}40`,
              boxShadow: `inset 0 0 30px ${config.color}10`,
            }}
          />

          {/* Scan line animation */}
          <motion.div
            className="absolute left-0 right-0 h-32 pointer-events-none opacity-30"
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              background: `linear-gradient(180deg, transparent, ${config.color}30, transparent)`,
            }}
          />

          {/* Header */}
          <div 
            className="sticky top-0 z-10 flex items-center justify-between p-6 border-b glass-strong"
            style={{ 
              borderColor: `${config.color}30`,
            }}
          >
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-lg transition-colors"
                style={{ 
                  background: `${config.color}20`,
                  color: config.color,
                }}
              >
                <ArrowLeft size={20} />
              </motion.button>
              
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: `${config.color}20` }}
                >
                  <Icon size={24} style={{ color: config.color }} />
                </div>
                <div>
                  <h2 
                    className="font-orbitron text-xl md:text-2xl font-bold"
                    style={{ color: config.color }}
                  >
                    {config.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-rajdhani">
                    {config.subtitle}
                  </p>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-lg transition-colors hover:bg-muted"
            >
              <X size={24} className="text-muted-foreground" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6 md:p-8 custom-scrollbar">
            {renderContent()}
          </div>

          {/* Corner decorations */}
          <div 
            className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top left, ${config.color}20 0%, transparent 70%)`,
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
            style={{
              background: `radial-gradient(circle at bottom right, ${config.color}20 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionPanel;
