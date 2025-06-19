import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Zap, Globe, Layers } from 'lucide-react';

const Cards: React.FC = () => {
  const features = [
    {
      icon: <Palette size={32} />,
      title: 'Glassmorphism Design',
      description: 'Beautiful translucent interfaces with backdrop blur effects that adapt to light and dark themes seamlessly.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Smooth Animations',
      description: 'Fluid motion design powered by Framer Motion, creating engaging user experiences with every interaction.',
    },
    {
      icon: <Globe size={32} />,
      title: '3D Integration',
      description: 'Interactive Three.js elements that respond to user input, bringing depth and immersion to web experiences.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Responsive Design',
      description: 'Perfectly crafted layouts that work flawlessly across all devices and screen sizes.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Premium Features</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Crafted with attention to detail and modern web standards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-primary-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;