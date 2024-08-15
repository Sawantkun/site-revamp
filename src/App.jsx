import React from 'react';
import RoadMap from './components/RoadMap';
import Subscription from './components/Subscription';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen dark:bg-[#fff] bg-[#130922] text-white px-6 sm:px-10 lg:px-20 xl:px-40 pt-10 pb-2">
      <RoadMap />
      <Subscription />
      <Footer />
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-10 lg:right-10">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
