import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glitch effect name */}
          <motion.h1
            className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-primary animate-pulse-glow"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            ABBAS HUSSEIN
          </motion.h1>

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
            className="flex flex-wrap justify-center gap-4 mt-8 text-muted-foreground"
          >
            <span className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-primary" />
              Richmond Hill, Ontario
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-primary" />
              647-855-5583
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-6 mt-8"
          >
            <a
              href="https://www.linkedin.com/in/abbas-hussein-08620728b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/ashussein1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:abbas.sajjadh@gmail.com"
              className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-orbitron font-semibold rounded-lg hover:bg-primary/80 transition-all duration-300 box-glow"
            >
              Explore My Work
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
