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
import EventDetails from './pages/EventDetails';
import Counselling2 from './pages/Counselling2';
import ContactFooter from './components/ContactFooter';
import Footer from './components/Footer';
import './index.css';
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminLayout from "./pages/Admin/AdminLayout";
import BlogsAdmin from "./pages/Admin/BlogsAdmin";
import EventsAdmin from "./pages/Admin/EventsAdmin";
import ProtectedRoute from "./pages/Admin/ProtectedRoute";
import EventInquiriesAdmin from "./pages/Admin/EventInquiriesAdmin";
import PaidEnrollmentsAdmin from "./pages/Admin/PaidEnrollmentsAdmin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/Privacy';
import Ethics from './pages/Ethics';
import RefundPolicy from './pages/RefundPolicy';


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
  const isAdminPage = location.pathname.startsWith('/admin');
  const isLegalPage = ['/terms-and-conditions', '/privacy-policy', '/ethics', '/refund-policy'].includes(location.pathname);

  return (
    <div className="app">
      {!isAdminPage && <Header />}

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
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/event-details/:slug" element={<EventDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/admin" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="events" element={<EventsAdmin />} />
            <Route path="event-inquiries" element={<EventInquiriesAdmin />} />
            <Route path="paid-enrollments" element={<PaidEnrollmentsAdmin />} />
          </Route>

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="events" element={<EventsAdmin />} />
          </Route>
        </Routes>
      </main>

      {!isAdminPage &&
        !isAboutPage &&
        !isContactPage &&
        !isSchoolPage &&
        !isCollegePage &&
        !isCorporateEAPPage &&
        !isBlogsPage &&
        !isBlogDetailPage &&
        !isCounsellingPage &&
        !isCareerCounsellingPage && 
        !isLegalPage && <ContactFooter />}

      {!isAdminPage && <Footer />}

      {!isAdminPage && (
        <a
          href="https://wa.me/919880274824"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-[#25D366] text-white rounded-full flex justify-center items-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-all z-[999]"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </a>
      )}
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