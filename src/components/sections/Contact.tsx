import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={24} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={24} />, href: '#', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Get In Touch
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="glass rounded-full p-4 text-primary-500 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-slate-500 dark:text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 ModernWeb. Crafted with passion and precision.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;