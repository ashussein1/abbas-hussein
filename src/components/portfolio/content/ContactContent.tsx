import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'abbas.sajjadh@gmail.com', href: 'mailto:abbas.sajjadh@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'abbas-hussein', href: 'https://www.linkedin.com/in/abbas-hussein-08620728b/' },
  { icon: Github, label: 'GitHub', value: 'ashussein1', href: 'https://github.com/ashussein1' },
  { icon: MapPin, label: 'Location', value: 'Richmond Hill, Ontario', href: null },
  { icon: Phone, label: 'Phone', value: '647-855-5583', href: 'tel:+16478555583' },
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
    <div className="space-y-6">
      {/* Contact Links */}
      <div className="grid gap-2">
        {contactLinks.map((link, index) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            {link.href ? (
              <motion.a
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted/70 hover:border-primary/30 transition-all"
                whileHover={{ x: 3 }}
              >
                <div className="p-2.5 rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-105">
                  <link.icon size={18} className="text-primary" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight 
                  size={16} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                />
              </motion.a>
            ) : (
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <link.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium">{link.value}</p>
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
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
        className="p-5 rounded-2xl bg-muted/50 border border-border/50 space-y-4"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-primary/10">
            <MessageSquare size={18} className="text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">
            Send a Message
          </h3>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors text-foreground placeholder:text-muted-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors text-foreground placeholder:text-muted-foreground"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-background/80 border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors text-foreground placeholder:text-muted-foreground resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
        >
          <Send size={16} />
          <span>Send Message</span>
        </motion.button>
      </motion.form>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center pt-4 border-t border-border/50"
      >
        <p className="text-muted-foreground text-sm">
          © 2025 Abbas Hussein. Built with passion and code.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactContent;