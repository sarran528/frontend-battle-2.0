import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Team Members', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Us"
          subtitle="Learn more about our team and mission"
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We are passionate about creating cutting-edge web experiences that push
              the boundaries of what's possible on the web. Our team combines
              creativity with technical expertise to deliver outstanding results.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Using the latest technologies like React, Three.js, and TypeScript,
              we build performant and scalable applications that provide seamless
              user experiences across all devices.
            </p>
            <Button variant="primary">Join Our Team</Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 