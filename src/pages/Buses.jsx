import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import './Pages.css';

const popularRoutes = [
  {
    id: 1,
    from: 'Barcelona',
    to: 'Madrid',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '€30'
  },
  {
    id: 2,
    from: 'Rome',
    to: 'Florence',
    image: 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '€25'
  },
  {
    id: 3,
    from: 'Berlin',
    to: 'Prague',
    image: 'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '€40'
  }
];

const Buses = () => {
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
            Explore Europe by Bus
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Comfortable and affordable bus travel across Europe.
            Book your next journey with us.
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
          <input type="text" placeholder="Date" />
        </div>
        <div className="search-input">
          <Users size={20} />
          <input type="text" placeholder="Passengers" />
        </div>
        <button className="search-button">
          <Search size={20} />
          Search Buses
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
          {popularRoutes.map((route, index) => (
            <motion.div
              key={route.id}
              className="place-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-image">
                <img src={route.image} alt={`${route.from} to ${route.to}`} />
              </div>
              <div className="card-content">
                <h3>{route.from} → {route.to}</h3>
                <p>Starting from {route.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Buses;