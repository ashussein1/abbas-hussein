import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'abbas.sajjadh@gmail.com', href: 'mailto:abbas.sajjadh@gmail.com', color: '#00d4ff' },
  { icon: Linkedin, label: 'LinkedIn', value: 'abbas-hussein', href: 'https://www.linkedin.com/in/abbas-hussein-08620728b/', color: '#ff00aa' },
  { icon: Github, label: 'GitHub', value: 'ashussein1', href: 'https://github.com/ashussein1', color: '#00ff88' },
  { icon: MapPin, label: 'Location', value: 'Richmond Hill, Ontario', href: null, color: '#ffaa00' },
  { icon: Phone, label: 'Phone', value: '647-855-5583', href: 'tel:+16478555583', color: '#aa66ff' },
];

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:abbas.sajjadh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success('Opening your email client...');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-8">
      {/* Contact Links */}
      <div className="grid gap-3">
        {contactLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {link.href ? (
              <motion.a
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-xl transition-all"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                }}
                whileHover={{ 
                  x: 5,
                  borderColor: link.color,
                  boxShadow: `0 0 20px ${link.color}20`,
                }}
              >
                <div 
                  className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${link.color}20` }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground font-rajdhani">{link.label}</p>
                  <p className="text-foreground font-medium font-rajdhani group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight 
                  size={18} 
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </motion.a>
            ) : (
              <div 
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                <div 
                  className="p-2.5 rounded-xl"
                  style={{ background: `${link.color}20` }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-rajdhani">{link.label}</p>
                  <p className="text-foreground font-medium font-rajdhani">{link.value}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onSubmit={handleSubmit}
        className="p-6 rounded-xl space-y-4"
        style={{
          background: 'hsl(var(--card))',
          border: '1px solid hsl(var(--border))',
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg" style={{ background: '#aa66ff20' }}>
            <MessageSquare size={20} style={{ color: '#aa66ff' }} />
          </div>
          <h3 className="font-orbitron text-lg font-bold text-foreground">
            SEND A MESSAGE
          </h3>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2 font-rajdhani">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground font-rajdhani"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2 font-rajdhani">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground font-rajdhani"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2 font-rajdhani">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground font-rajdhani resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-orbitron font-semibold rounded-xl transition-all"
          style={{
            boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
          }}
        >
          <Send size={18} />
          <span>TRANSMIT MESSAGE</span>
        </motion.button>
      </motion.form>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center pt-4 border-t border-border"
      >
        <p className="text-muted-foreground text-sm font-rajdhani">
          © 2025 Abbas Hussein. Built with passion and code.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactContent;
