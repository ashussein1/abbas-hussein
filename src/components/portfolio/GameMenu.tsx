import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Zap, Briefcase, Rocket, Mail, ChevronRight, Globe } from 'lucide-react';
import ModernBackground from './ModernBackground';

type SectionType = 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface GameMenuProps {
  onSelect: (section: SectionType) => void;
  activeSection: SectionType | null;
}

const menuItems: { id: SectionType; label: string; icon: any; description: string }[] = [
  { id: 'about', label: 'About', icon: User, description: 'Learn about me' },
  { id: 'skills', label: 'Skills', icon: Zap, description: 'Tech stack & abilities' },
  { id: 'experience', label: 'Experience', icon: Briefcase, description: 'Work history' },
  { id: 'projects', label: 'Projects', icon: Rocket, description: 'Featured builds' },
  { id: 'contact', label: 'Contact', icon: Mail, description: 'Get in touch' },
];

const GameMenu = ({ onSelect, activeSection }: GameMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<SectionType | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Modern Background */}
      <ModernBackground />

      {/* Minimal Header */}
      <div className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-end items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 text-white/60 font-mono text-sm"
        >
          <Globe size={14} />
          <span>TORONTO, ON</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          {/* Name */}
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none mb-4">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 50%, #a78bfa 100%)',
              }}
            >
              Abbas
            </span>
            <br />
            <span className="text-white">Hussein</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg md:text-xl tracking-wide mt-6"
          >
            Software Engineer · AI Enthusiast
          </motion.p>

          {/* CTA hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/30 text-sm mt-12 tracking-widest uppercase"
          >
            Explore my work
          </motion.p>
        </motion.div>

        {/* Menu Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => onSelect(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative rounded-2xl p-6 text-left transition-all duration-500 backdrop-blur-sm border border-white/10 hover:border-white/20"
              style={{
                background: hoveredItem === item.id 
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(255, 255, 255, 0.03)',
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.15), transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Icon */}
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <item.icon 
                    size={22} 
                    className="text-white/60 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <ChevronRight 
                  size={18} 
                  className="text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300 ml-auto"
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300 mb-1">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">
                {item.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center text-white/30 text-sm"
        >
          <p>© 2025 Abbas Hussein</p>
        </motion.div>
      </div>
    </div>
  );
};

export default GameMenu;
