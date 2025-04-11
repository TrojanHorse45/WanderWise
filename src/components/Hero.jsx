import React from 'react';
import { motion } from 'framer-motion';
import './styles/Hero.css';

const Hero = () => {
  return (
    <motion.div 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We Make Finding Your Perfect Stay A Luxurious Experience...
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Discover premium hotels worldwide with exclusive deals and personalized recommendations.
          Your dream vacation starts here.
        </motion.p>
        <motion.button
          className="btn-explore"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Let's Go
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero;