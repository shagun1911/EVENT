import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DaySchedule from './components/DaySchedule';
import Location from './components/Location';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Schedule from './pages/Schedule'; 
import Team from './components/Team';
import Curriculum from './components/Curriculum';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <DaySchedule />
              <Curriculum/>
              <Feedback />
              <Team/>
              <Location />
            </>
          } />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
