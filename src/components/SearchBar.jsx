import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles/SearchBar.css';

const SearchBar = () => {
  return (
    <motion.div 
      className="search-bar"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="search-input">
        <MapPin size={20} />
        <input type="text" placeholder="Where are you going?" />
      </div>
      <div className="search-input">
        <Calendar size={20} />
        <input type="text" placeholder="Check-in" />
      </div>
      <div className="search-input">
        <Calendar size={20} />
        <input type="text" placeholder="Check-out" />
      </div>
      <button className="search-button">
        <Search size={20} />
        Search
      </button>
    </motion.div>
  );
};

export default SearchBar;