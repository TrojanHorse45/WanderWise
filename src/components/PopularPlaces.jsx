import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import './styles/PopularPlaces.css';

const places = [
  {
    id: 1,
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$200/night'
  },
  {
    id: 2,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$350/night'
  },
  {
    id: 3,
    name: 'Santorini',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$280/night'
  },
  {
    id: 4,
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$180/night'
  },
  {
    id: 5,
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$300/night'
  },
  {
    id: 6,
    name: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    price: '$250/night'
  }
];

const PopularPlaces = () => {
  return (
    <section className="popular-places">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Popular Places
      </motion.h2>
      <div className="places-grid">
        {places.map((place, index) => (
          <motion.div
            key={place.id}
            className="place-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card-image">
              <img src={place.image} alt={place.name} />
            </div>
            <div className="card-content">
              <h3>{place.name}</h3>
              <p>{place.price}</p>
              <button className="add-button">
                <Plus size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularPlaces;