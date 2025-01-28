import React from 'react';
import { Calendar, MapPin, Clock, Download, Bell, Users, BookOpen, School, Award } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import About from './components/About';
import DaySchedule from './components/DaySchedule';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <DaySchedule />
      <Location />
      <Footer />
    </div>
  );
}

export default App;