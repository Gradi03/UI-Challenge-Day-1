import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import InteractiveCard from './components/InteractiveCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar />           Render Navigation Bar */}
      <HeroSection />      {/* Render Hero Section */}
      {/* <InteractiveCard />   */}
    </div>
  );
}

export default App;
