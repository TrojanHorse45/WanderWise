import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import './Pages.css';

const popularFlights = [
  {
    id: 1,
    from: 'New York',
    to: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$450'
  },
  {
    id: 2,
    from: 'Paris',
    to: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$850'
  },
  {
    id: 3,
    from: 'Dubai',
    to: 'Singapore',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$550'
  }
];

const Flights = () => {
  return (
    <>
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
            Find Your Perfect Flight Journey
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover amazing flight deals to destinations worldwide.
            Book your next adventure today.
          </motion.p>
        </div>
      </motion.div>

      <motion.div 
        className="search-bar"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="search-input">
          <MapPin size={20} />
          <input type="text" placeholder="From" />
        </div>
        <div className="search-input">
          <MapPin size={20} />
          <input type="text" placeholder="To" />
        </div>
        <div className="search-input">
          <Calendar size={20} />
          <input type="text" placeholder="Departure" />
        </div>
        <div className="search-input">
          <Users size={20} />
          <input type="text" placeholder="Passengers" />
        </div>
        <button className="search-button">
          <Search size={20} />
          Search Flights
        </button>
      </motion.div>

      <section className="popular-places">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Popular Routes
        </motion.h2>
        <div className="places-grid">
          {popularFlights.map((flight, index) => (
            <motion.div
              key={flight.id}
              className="place-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-image">
                <img src={flight.image} alt={`${flight.from} to ${flight.to}`} />
              </div>
              <div className="card-content">
                <h3>{flight.from} → {flight.to}</h3>
                <p>Starting from {flight.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Flights;