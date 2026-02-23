import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Academy from './components/Academy';
import Events from './components/Events';
import Counselling from './components/Counselling';
import Wellness from './components/Wellness';
import Corporate from './components/Corporate';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Academy />
        <Events />
        <Counselling />
        <Wellness />
        <Corporate />
        <Testimonials />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
