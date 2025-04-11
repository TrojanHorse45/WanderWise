import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hotels from './pages/Hotels.jsx';
import Flights from './pages/Flights.jsx';
import Trains from './pages/Trains.jsx';
import Buses from './pages/Buses.jsx';
import './styles/global.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('hotels');

  const renderPage = () => {
    switch(currentPage) {
      case 'hotels':
        return <Hotels />;
      case 'flights':
        return <Flights />;
      case 'trains':
        return <Trains />;
      case 'buses':
        return <Buses />;
      default:
        return <Hotels />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;