import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import UpcomingEvents from './pages/UpcomingEvents';
import CareerCounselling from './pages/CareerCounselling';
import ContactFooter from './components/ContactFooter';
import Footer from './components/Footer';
import './index.css';

function AppContent() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/career-counselling" element={<CareerCounselling />} />
        </Routes>
      </main>
      {!isAboutPage && <ContactFooter />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
