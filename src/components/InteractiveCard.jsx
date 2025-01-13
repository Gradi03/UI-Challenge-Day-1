// src/components/InteractiveCard.js

import React from 'react';
import { motion } from 'framer-motion';

const InteractiveCard = () => {
  return (
    <motion.div 
      initial={{ scale: 1 }} 
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
      className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img className="w-full" src="https://via.placeholder.com/400x300" alt="Sample Image" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">Interactive Card</h2>
        <p className="text-gray-600 mt-2">A simple yet interactive card with hover effects and animations.</p>
        <motion.button 
          whileTap={{ scale: 0.95 }} 
          transition={{ duration: 0.2 }}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InteractiveCard;
