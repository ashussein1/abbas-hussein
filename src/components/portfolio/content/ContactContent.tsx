import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'abbas.sajjadh@gmail.com', href: 'mailto:abbas.sajjadh@gmail.com', color: '#ff6b6b' },
  { icon: Linkedin, label: 'LinkedIn', value: 'abbas-hussein', href: 'https://www.linkedin.com/in/abbas-hussein-08620728b/', color: '#4ecdc4' },
  { icon: Github, label: 'GitHub', value: 'ashussein1', href: 'https://github.com/ashussein1', color: '#ffe66d' },
  { icon: MapPin, label: 'Location', value: 'Richmond Hill, Ontario', href: null, color: '#95e1d3' },
  { icon: Phone, label: 'Phone', value: '647-855-5583', href: 'tel:+16478555583', color: '#f38181' },
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
              <a
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div 
                  className="p-2.5 rounded-xl"
                  style={{ background: `${link.color}20` }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-white/50">{link.label}</p>
                  <p className="text-white font-medium group-hover:text-[#f38181] transition-colors">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight 
                  size={18} 
                  className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </a>
            ) : (
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                <div 
                  className="p-2.5 rounded-xl"
                  style={{ background: `${link.color}20` }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-sm text-white/50">{link.label}</p>
                  <p className="text-white font-medium">{link.value}</p>
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
        className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4"
      >
        <h3 className="font-orbitron text-lg font-bold text-white mb-4">
          Send a Message
        </h3>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#f38181] focus:ring-1 focus:ring-[#f38181] transition-colors text-white placeholder:text-white/30"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#f38181] focus:ring-1 focus:ring-[#f38181] transition-colors text-white placeholder:text-white/30"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#f38181] focus:ring-1 focus:ring-[#f38181] transition-colors text-white placeholder:text-white/30 resize-none"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#f38181] text-white font-orbitron font-semibold rounded-xl hover:bg-[#f38181]/80 transition-all"
        >
          <Send size={18} />
          <span>Send Message</span>
        </motion.button>
      </motion.form>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center pt-4 border-t border-white/10"
      >
        <p className="text-white/50 text-sm">
          © 2025 Abbas Hussein. Built with passion and code.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactContent;
