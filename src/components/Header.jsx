import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const headerClasses = isHomePage
    ? (isScrolled
      ? 'bg-white border-b border-gray-100 shadow-md'
      : 'bg-white/10 backdrop-blur-xl border-b border-white/20')
    : 'bg-white border-b border-gray-100 shadow-sm';

  const textClasses = isHomePage
    ? (isScrolled
      ? 'text-gray-950 hover:text-brand-purple'
      : 'text-white/90 hover:text-white')
    : 'text-gray-950 hover:text-brand-purple';

  const services = [
    // { label: 'Individual Counselling', href: '#individual' },
    { label: 'Career Counselling', href: '/career-counselling' },
    { label: 'Workshops', href: '/workshop' },
    { label: 'Training', href: '/training' },
    { label: 'Certificate Courses', href: '/certificate' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16 flex justify-between items-center h-18 sm:h-22">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo2.png"
            alt="VRIKSH Logo"
            className="h-8 sm:h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:block ml-auto mr-10">
          <ul className="flex gap-8 sm:gap-10">
            {[
              { label: 'Home', href: '/' },
              { label: 'About us', href: '/about' },
              { label: 'Services', href: '#services', hasDropdown: true },
              { label: 'Blogs', href: '#blogs' },
              { label: 'Contact us', href: '#contact' }
            ].map((item) => (
              <li
                key={item.label}
                className="relative flex items-center gap-1 group cursor-pointer h-full py-4 text-lg sm:text-[19px] font-medium transition-colors"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.href.startsWith('/') ? (
                  <Link to={item.href} className={`flex items-center gap-1 ${textClasses}`}>
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1">
                    <a
                      href={item.label === 'Services' ? undefined : item.href}
                      className={`flex items-center gap-1 ${textClasses}`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`opacity-70 group-hover:opacity-100 transition-all ${isServicesOpen && item.hasDropdown ? 'rotate-180' : ''}`}>
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      )}
                    </a>

                    {/* Services Dropdown */}
                    {item.hasDropdown && isServicesOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-2xl py-4 flex flex-col border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                        {services.map((service) => (
                          service.href.startsWith('/') ? (
                            <Link
                              key={service.label}
                              to={service.href}
                              className="px-6 py-2.5 text-sm text-gray-700 hover:bg-brand-purple/10 hover:text-brand-purple transition-colors font-medium"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ) : (
                            <a
                              key={service.label}
                              href={service.href}
                              className="px-6 py-2.5 text-sm text-gray-700 hover:bg-brand-purple/10 hover:text-brand-purple transition-colors font-medium"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              {service.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/upcoming-events" className="hidden sm:flex items-center  bg-[#520378] text-white px-8 py-3 rounded-full font-semibold text-[18px] hover:bg-brand-purple-light transition-all">
            Upcoming events
          </Link>
          <Link to="/upcoming-events" className="hidden sm:flex items-center justify-center bg-[#520378] text-white p-3 rounded-full hover:bg-brand-purple-light transition-all group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <button
            className={`lg:hidden ml-4 text-2xl p-2 md:block transition-colors ${isHomePage
              ? (isScrolled ? 'text-gray-900' : 'text-white')
              : 'text-gray-900'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full ${isHomePage ? 'bg-brand-purple' : 'bg-white'} border-t ${isHomePage ? 'border-white/10' : 'border-gray-100'} overflow-hidden transition-all duration-300 shadow-xl ${isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col gap-5 px-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'About us', href: '/about' },
            { label: 'Services', href: '#services', hasDropdown: true },
            { label: 'Blogs', href: '#blogs' },
            { label: 'Contact us', href: '#contact' }
          ].map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  className={`block text-[22px] font-medium ${isHomePage ? 'text-white/90 hover:text-white' : 'text-gray-900 hover:text-brand-purple'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div className="flex flex-col gap-3">
                  <button
                    className={`flex items-center justify-between w-full text-[22px] font-medium ${isHomePage ? 'text-white/90 hover:text-white' : 'text-gray-900 hover:text-brand-purple'}`}
                    onClick={() => item.hasDropdown && setIsServicesOpen(!isServicesOpen)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </button>

                  {item.hasDropdown && isServicesOpen && (
                    <div className="flex flex-col gap-4 pl-4 pb-2 border-l-2 border-white/20 ml-2 animate-in fade-in slide-in-from-top-1">
                      {services.map((service) => (
                        service.href.startsWith('/') ? (
                          <Link
                            key={service.label}
                            to={service.href}
                            className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-brand-purple'} text-lg font-medium`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {service.label}
                          </Link>
                        ) : (
                          <a
                            key={service.label}
                            href={service.href}
                            className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-brand-purple'} text-lg font-medium`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {service.label}
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/upcoming-events"
              className={`block w-full ${isHomePage ? 'bg-white text-brand-purple' : 'bg-[#520378] text-white'} py-3 rounded-full font-bold text-center text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming events
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
