import React from 'react';
import { Hotel, Plane, Train, Bus } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles/Navbar.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <div className="logo">
          <Hotel size={24} />
          <span>WanderWise</span>
        </div>
        <div className="nav-links">
          <div className="booking-links">
            <button 
              className={`nav-link ${currentPage === 'hotels' ? 'active' : ''}`}
              onClick={() => setCurrentPage('hotels')}
            >
              <Hotel size={18} />
              Hotels
            </button>
            <button 
              className={`nav-link ${currentPage === 'flights' ? 'active' : ''}`}
              onClick={() => setCurrentPage('flights')}
            >
              <Plane size={18} />
              Flights
            </button>
            <button 
              className={`nav-link ${currentPage === 'trains' ? 'active' : ''}`}
              onClick={() => setCurrentPage('trains')}
            >
              <Train size={18} />
              Trains
            </button>
            <button 
              className={`nav-link ${currentPage === 'buses' ? 'active' : ''}`}
              onClick={() => setCurrentPage('buses')}
            >
              <Bus size={18} />
              Buses
            </button>
          </div>
          <button className="btn-sign-in">Sign in</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;