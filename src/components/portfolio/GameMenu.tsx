import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Zap, Briefcase, Rocket, Mail, ChevronRight, Terminal, Cpu, Database, Globe } from 'lucide-react';

type SectionType = 'about' | 'skills' | 'experience' | 'projects' | 'contact';

interface GameMenuProps {
  onSelect: (section: SectionType) => void;
  activeSection: SectionType | null;
}

const menuItems: { id: SectionType; label: string; icon: any; color: string; description: string }[] = [
  { id: 'about', label: 'PROFILE', icon: User, color: '#00d4ff', description: 'Learn about me' },
  { id: 'skills', label: 'ARSENAL', icon: Zap, color: '#ff00aa', description: 'Tech stack & abilities' },
  { id: 'experience', label: 'MISSIONS', icon: Briefcase, color: '#ffaa00', description: 'Work history' },
  { id: 'projects', label: 'PROJECTS', icon: Rocket, color: '#00ff88', description: 'Featured builds' },
  { id: 'contact', label: 'CONNECT', icon: Mail, color: '#aa66ff', description: 'Get in touch' },
];

const GameMenu = ({ onSelect, activeSection }: GameMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<SectionType | null>(null);
  const [time, setTime] = useState(new Date());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        
        {/* Cyber grid */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--neon-cyan)) 0%, transparent 70%)',
            left: mousePos.x - 300,
            top: mousePos.y - 300,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Animated lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              width: '100%',
              top: `${20 + i * 20}%`,
              opacity: 0.3,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 3 === 0 ? 'hsl(var(--neon-cyan))' : i % 3 === 1 ? 'hsl(var(--neon-pink))' : 'hsl(var(--neon-purple))',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* HUD Elements */}
      <div className="fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-start pointer-events-none">
        {/* Top left corner */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 text-primary font-mono text-xs">
            <Terminal size={14} />
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground font-mono text-xs">
            <span className="flex items-center gap-1">
              <Cpu size={12} /> CPU: 99.9%
            </span>
            <span className="flex items-center gap-1">
              <Database size={12} /> MEM: OPTIMAL
            </span>
          </div>
        </motion.div>

        {/* Top right corner */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-right"
        >
          <div className="font-orbitron text-2xl text-primary tabular-nums">
            {time.toLocaleTimeString('en-US', { hour12: false })}
          </div>
          <div className="text-muted-foreground font-mono text-xs flex items-center gap-2 justify-end">
            <Globe size={12} />
            <span>TORONTO, ON</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Glitch Title */}
          <div className="relative inline-block mb-6">
            <motion.h1
              className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-pink)), hsl(var(--neon-purple)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                textShadow: [
                  '0 0 20px hsl(var(--neon-cyan))',
                  '0 0 40px hsl(var(--neon-pink))',
                  '0 0 20px hsl(var(--neon-purple))',
                  '0 0 20px hsl(var(--neon-cyan))',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ABBAS
            </motion.h1>
            <motion.h1
              className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,255,255,0.5)',
                  '0 0 30px rgba(255,255,255,0.3)',
                  '0 0 10px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              HUSSEIN
            </motion.h1>
          </div>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 text-muted-foreground font-rajdhani text-xl md:text-2xl tracking-widest"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <span>SOFTWARE ENGINEER</span>
            <span className="text-primary">•</span>
            <span>AI ENTHUSIAST</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          {/* Animated subtitle line */}
          <motion.div
            className="mt-8 text-sm font-mono text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-primary">&gt;</span> SELECT A MODULE TO EXPLORE
          </motion.div>
        </motion.div>

        {/* Menu Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              onClick={() => onSelect(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                group relative overflow-hidden rounded-xl p-6 text-left transition-all duration-300
                ${activeSection === item.id 
                  ? 'ring-2 ring-offset-2 ring-offset-background' 
                  : ''
                }
              `}
              style={{
                background: hoveredItem === item.id 
                  ? `linear-gradient(135deg, ${item.color}15 0%, transparent 100%)`
                  : 'hsl(var(--card) / 0.5)',
                borderColor: hoveredItem === item.id ? item.color : 'hsl(var(--border))',
                boxShadow: hoveredItem === item.id 
                  ? `0 0 30px ${item.color}30, inset 0 0 30px ${item.color}10`
                  : 'none',
                ['--tw-ring-color' as any]: item.color,
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated border */}
              <div 
                className="absolute inset-0 rounded-xl opacity-50 transition-opacity duration-300"
                style={{
                  border: `1px solid ${hoveredItem === item.id ? item.color : 'hsl(var(--border))'}`,
                }}
              />

              {/* Scan line effect on hover */}
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    initial={{ top: '-100%' }}
                    animate={{ top: '100%' }}
                    exit={{ top: '100%' }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 right-0 h-20 pointer-events-none"
                    style={{
                      background: `linear-gradient(180deg, transparent, ${item.color}20, transparent)`,
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-lg transition-all duration-300"
                  style={{
                    background: `${item.color}20`,
                    boxShadow: hoveredItem === item.id ? `0 0 20px ${item.color}40` : 'none',
                  }}
                >
                  <item.icon 
                    size={28} 
                    style={{ color: item.color }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <ChevronRight 
                  size={20} 
                  className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: hoveredItem === item.id ? item.color : undefined }}
                />
              </div>

              {/* Label */}
              <h3 
                className="relative z-10 font-orbitron text-xl font-bold mb-2 transition-colors duration-300"
                style={{ color: hoveredItem === item.id ? item.color : 'hsl(var(--foreground))' }}
              >
                {item.label}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-muted-foreground font-rajdhani">
                {item.description}
              </p>

              {/* Corner decorations */}
              <div 
                className="absolute top-2 left-2 w-3 h-3 border-t border-l transition-colors duration-300"
                style={{ borderColor: hoveredItem === item.id ? item.color : 'transparent' }}
              />
              <div 
                className="absolute bottom-2 right-2 w-3 h-3 border-b border-r transition-colors duration-300"
                style={{ borderColor: hoveredItem === item.id ? item.color : 'transparent' }}
              />
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center text-muted-foreground text-sm font-mono"
        >
          <p>© 2025 ABBAS HUSSEIN • CRAFTED WITH PASSION</p>
        </motion.div>
      </div>
    </div>
  );
};

export default GameMenu;
