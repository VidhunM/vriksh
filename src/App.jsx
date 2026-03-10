import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import UpcomingEvents from './pages/UpcomingEvents';
import CareerCounselling from './pages/CareerCounselling';
import Workshop from './pages/Workshop';
import Training from './pages/Training';
import TrainingListing from './pages/TrainingListing';
import Certificate from './pages/Certificate';
import School from './pages/School';
import College from './pages/College';
import CorporateEAP from './pages/CorporateEAP';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Counselling2 from './pages/Counselling2';
import ContactFooter from './components/ContactFooter';
import Footer from './components/Footer';
import './index.css';

function AppContent() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';
  const isSchoolPage = location.pathname === '/school';
  const isCollegePage = location.pathname === '/college';
  const isCorporateEAPPage = location.pathname === '/corporate-eap';
  const isBlogsPage = location.pathname === '/blogs';
  const isBlogDetailPage = location.pathname.startsWith('/blog/');
  const isCounsellingPage = location.pathname === '/counselling';
  const isCareerCounsellingPage = location.pathname === '/career-counselling';

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="/career-counselling" element={<CareerCounselling />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training-listing" element={<TrainingListing />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/school" element={<School />} />
          <Route path="/college" element={<College />} />
          <Route path="/corporate-eap" element={<CorporateEAP />} />
          <Route path="/counselling" element={<Counselling2 />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isAboutPage && !isContactPage && !isSchoolPage && !isCollegePage && !isCorporateEAPPage && !isBlogsPage && !isBlogDetailPage && !isCounsellingPage && !isCareerCounsellingPage && <ContactFooter />}
      <Footer />

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919880274824"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-[#25D366] text-white rounded-full flex justify-center items-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-all z-[999]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
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
