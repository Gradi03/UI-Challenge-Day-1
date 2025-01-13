import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-yellow-50 text-gray-800 py-16 px-6 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <DecorativeCircles />

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <AnimatedTitle />
        <p className="text-lg leading-relaxed text-gray-600 mb-16">
          Unlock innovation and creativity with features designed to captivate and inspire.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-xl font-semibold text-gray-700">
            Ready to transform your online presence?
          </p>
          <p className="text-lg text-gray-600 mb-4">
            DM me on Instagram at{' '}
            <a
              href="https://instagram.com/ninja_design_pro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline"
            >
              @ninja_design_pro
            </a>{' '}
            for more projects and personalized solutions!
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

const DecorativeCircles = () => (
  <>
    <motion.div
      className="absolute top-0 left-0 w-52 h-52 bg-indigo-500 bg-opacity-20 rounded-full mix-blend-multiply filter blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
    ></motion.div>
    <motion.div
      className="absolute top-20 right-0 w-40 h-40 bg-yellow-400 bg-opacity-30 rounded-full mix-blend-multiply filter blur-2xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    ></motion.div>
    <div className="absolute bottom-0 left-16 w-60 h-60 bg-blue-300 bg-opacity-25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
  </>
);

const AnimatedTitle = () => (
  <motion.h2
    initial={{ opacity: 0, y: -50, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    className="text-6xl font-extrabold mb-6 text-indigo-800 tracking-wide"
  >
    <motion.span
      initial={{ rotate: -10, scale: 0.9 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
    >
      Empowering
    </motion.span>{' '}
    <span>Features</span>
  </motion.h2>
);

const features = [
  {
    title: 'Responsive Design',
    description: 'Your website will look stunning on any device, from desktops to smartphones.',
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your visibility and rank higher on search engines to attract more clients.',
  },
  {
    title: 'Lightning-Fast Performance',
    description: 'Your site will load quickly, ensuring visitors stay engaged.',
  },
  {
    title: 'Custom Solutions',
    description: 'We tailor every project to match your unique business goals.',
  },
  {
    title: 'E-Commerce Integration',
    description: 'Seamlessly sell your products or services online with secure payment gateways.',
  },
  {
    title: 'Analytics and Reporting',
    description: 'Track your website’s performance with built-in analytics tools.',
  },
];

const FeatureCard = ({ title, description, index }) => {
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 300, damping: 20 });

  return (
    <motion.div
      style={{ scale: springScale }}
      onHoverStart={() => scale.set(1.1)}
      onHoverEnd={() => scale.set(1)}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: 'easeInOut',
        delay: index * 0.2, // Stagger animations
      }}
      className="relative bg-white p-8 rounded-xl shadow-xl overflow-hidden transform cursor-pointer group"
    >
      <h3 className="text-xl font-bold text-indigo-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeaturesSection;
