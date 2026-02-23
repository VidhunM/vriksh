import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Academy from './components/Academy';
import Events from './components/Events';
import Counselling from './components/Counselling';
import Wellness from './components/Wellness';
import Corporate from './components/Corporate';
import Testimonials from './components/Testimonials';
import WhyVriksh from './components/WhyVriksh';
import ContactFooter from './components/ContactFooter';
import './index.css';

import Footer from './components/Footer';

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
        <WhyVriksh />
        <Testimonials />
      </main>
      <ContactFooter />
      <Footer />
    </div>
  );
}

export default App;
