import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import AboutContent from './content/AboutContent';
import SkillsContent from './content/SkillsContent';
import ExperienceContent from './content/ExperienceContent';
import ProjectsContent from './content/ProjectsContent';
import ContactContent from './content/ContactContent';

type SectionType = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface SectionPanelProps {
  activeSection: SectionType | null;
  onClose: () => void;
}

const sectionConfig: Record<SectionType, { title: string; color: string; icon: string }> = {
  home: { title: 'Home', color: '#ff0033', icon: '🏠' },
  about: { title: 'About Me', color: '#ff6b6b', icon: '👤' },
  skills: { title: 'Technical Skills', color: '#4ecdc4', icon: '⚡' },
  experience: { title: 'Work Experience', color: '#ffe66d', icon: '💼' },
  projects: { title: 'Projects', color: '#95e1d3', icon: '🚀' },
  contact: { title: 'Get In Touch', color: '#f38181', icon: '✉️' },
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

  if (!activeSection || activeSection === 'home') return null;

  const config = sectionConfig[activeSection];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.98) 100%)',
            border: `1px solid ${config.color}40`,
            boxShadow: `0 0 60px ${config.color}20, inset 0 0 60px ${config.color}05`,
          }}
        >
          {/* Header */}
          <div 
            className="sticky top-0 z-10 flex items-center justify-between p-6 border-b backdrop-blur-md"
            style={{ 
              borderColor: `${config.color}30`,
              background: 'rgba(10,10,10,0.8)',
            }}
          >
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full transition-colors"
                style={{ 
                  background: `${config.color}20`,
                  color: config.color,
                }}
              >
                <ArrowLeft size={20} />
              </motion.button>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{config.icon}</span>
                <h2 
                  className="font-orbitron text-xl md:text-2xl font-bold"
                  style={{ color: config.color }}
                >
                  {config.title}
                </h2>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full transition-colors hover:bg-white/10"
            >
              <X size={24} className="text-white/70" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-6 md:p-8 custom-scrollbar">
            {renderContent()}
          </div>

          {/* Decorative elements */}
          <div 
            className="absolute top-0 left-0 w-32 h-32 opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top left, ${config.color}40 0%, transparent 70%)`,
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at bottom right, ${config.color}40 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionPanel;
