import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Animated grid floor effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 right-0 h-[60vh]"
          style={{
            background: 'linear-gradient(to top, rgba(255,0,51,0.1) 0%, transparent 100%)',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom center',
          }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,0,51,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,0,51,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }} />
        </div>
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="section-container text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-mono text-primary">Available for opportunities</span>
          </motion.div>

          {/* Glitch effect name */}
          <motion.div className="relative mb-6">
            <motion.h1
              className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative inline-block">
                ABBAS
                <span className="absolute inset-0 text-primary opacity-50 animate-pulse" style={{ clipPath: 'inset(0 0 50% 0)' }}>
                  ABBAS
                </span>
              </span>
              <br />
              <span className="text-primary animate-pulse-glow">HUSSEIN</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h2 className="font-orbitron text-xl sm:text-2xl md:text-3xl text-foreground/90 tracking-wider">
              Software Engineer
            </h2>
            <p className="font-mono text-lg text-muted-foreground">
              AI Enthusiast | Machine Learning Explorer
            </p>
          </motion.div>

          {/* Location & Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-muted-foreground"
          >
            <span className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-muted/30 backdrop-blur-sm border border-border/50">
              <MapPin size={14} className="text-primary" />
              Richmond Hill, Ontario
            </span>
            <span className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-muted/30 backdrop-blur-sm border border-border/50">
              <Phone size={14} className="text-primary" />
              647-855-5583
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mt-10"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/abbas-hussein-08620728b/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/ashussein1", label: "GitHub" },
              { icon: Mail, href: "mailto:abbas.sajjadh@gmail.com", label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group relative p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <social.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <motion.a
              href="#about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-orbitron font-semibold rounded-xl hover:bg-primary/80 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Enter My Universe</span>
              <ChevronDown size={20} className="animate-bounce relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>

      {/* CSS for grid animation */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
