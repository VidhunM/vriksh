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
    {
      label: 'Vriksh E - Academy',
      subItems: [
        { label: 'Workshops', href: '/workshop' },
        { label: 'Training Program', href: '/training' },
        { label: 'Certificate Courses', href: '/certificate' }
      ]
    },
    { label: 'Counselling', href: '/counselling' },
    {
      label: 'Institutional Wellness Program',
      subItems: [
        { label: 'For Schools', href: '/school' },
        { label: 'For Colleges', href: '/college' }
      ]
    },
    { label: 'Corporate - EAP', href: '/corporate-eap' },
    { label: 'Career Guidance', href: '/career-counselling' }
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
              { label: 'Blogs', href: '/blogs' },
              { label: 'Contact us', href: '/contact' }
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
                      <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-2xl py-3 flex flex-col border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                        {services.map((service) => (
                          <div key={service.label} className="relative group/sub">
                            {service.subItems ? (
                              <div className="px-6 py-3 text-[15px] text-gray-700 hover:bg-brand-purple/5 hover:text-brand-purple transition-colors font-medium flex justify-between items-center cursor-default">
                                <span>{service.label}</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-90 opacity-50">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </div>
                            ) : (
                              service.href.startsWith('/') ? (
                                <Link
                                  to={service.href}
                                  className="block px-6 py-3 text-[15px] text-gray-700 hover:bg-brand-purple/5 hover:text-brand-purple transition-colors font-medium"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              ) : (
                                <a
                                  href={service.href}
                                  className="block px-6 py-3 text-[15px] text-gray-700 hover:bg-brand-purple/5 hover:text-brand-purple transition-colors font-medium"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.label}
                                </a>
                              )
                            )}

                            {/* Sub-dropdown */}
                            {service.subItems && (
                              <div className="absolute top-0 left-[98%] w-64 bg-white shadow-xl rounded-2xl py-2 flex flex-col border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 -translate-x-2 group-hover/sub:translate-x-0 before:content-[''] before:absolute before:inset-y-0 before:-left-4 before:w-4">
                                {service.subItems.map((subItem) => (
                                  subItem.href.startsWith('/') ? (
                                    <Link
                                      key={subItem.label}
                                      to={subItem.href}
                                      className="block px-6 py-2.5 text-[14.5px] text-gray-700 hover:bg-brand-purple/5 hover:text-brand-purple transition-colors font-medium"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ) : (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="block px-6 py-2.5 text-[14.5px] text-gray-700 hover:bg-brand-purple/5 hover:text-brand-purple transition-colors font-medium"
                                      onClick={() => setIsServicesOpen(false)}
                                    >
                                      {subItem.label}
                                    </a>
                                  )
                                ))}
                              </div>
                            )}
                          </div>
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
      <div className={`lg:hidden absolute top-full left-0 w-full ${isHomePage ? 'bg-brand-purple' : 'bg-white'} border-t ${isHomePage ? 'border-white/10' : 'border-gray-100'} overflow-hidden transition-all duration-300 shadow-xl ${isMenuOpen ? 'max-h-[700px] opacity-100 py-4 sm:py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col gap-3 sm:gap-5 px-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'About us', href: '/about' },
            { label: 'Services', href: '#services', hasDropdown: true },
            { label: 'Blogs', href: '/blogs' },
            { label: 'Contact us', href: '/contact' }
          ].map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  className={`block text-[18px] sm:text-[22px] font-medium ${isHomePage ? 'text-white/90 hover:text-white' : 'text-gray-900 hover:text-brand-purple'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div className="flex flex-col gap-2 sm:gap-3">
                  <button
                    className={`flex items-center justify-between w-full text-[18px] sm:text-[22px] font-medium ${isHomePage ? 'text-white/90 hover:text-white' : 'text-gray-900 hover:text-brand-purple'}`}
                    onClick={() => item.hasDropdown && setIsServicesOpen(!isServicesOpen)}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 sm:w-5 sm:h-5 ${isServicesOpen ? 'rotate-180' : ''}`}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </button>

                  {item.hasDropdown && isServicesOpen && (
                    <div className="flex flex-col gap-3 sm:gap-4 pl-3 sm:pl-4 pb-2 border-l-2 border-white/20 ml-2 animate-in fade-in slide-in-from-top-1">
                      {services.map((service) => (
                        <div key={service.label} className="flex flex-col gap-1.5 sm:gap-2">
                          {service.subItems ? (
                            <>
                              <div className={`${isHomePage ? 'text-white/90' : 'text-gray-800'} text-[15px] sm:text-[18px] font-bold py-1`}>
                                {service.label}
                              </div>
                              <div className={`flex flex-col gap-1 sm:gap-2 pl-3 sm:pl-4 border-l-2 ${isHomePage ? 'border-white/10' : 'border-gray-200'} ml-1`}>
                                {service.subItems.map((subItem) => (
                                  subItem.href.startsWith('/') ? (
                                    <Link
                                      key={subItem.label}
                                      to={subItem.href}
                                      className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-brand-purple'} text-[14px] sm:text-[16px] font-medium py-1`}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsServicesOpen(false);
                                      }}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ) : (
                                    <a
                                      key={subItem.label}
                                      href={subItem.href}
                                      className={`${isHomePage ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-brand-purple'} text-[14px] sm:text-[16px] font-medium py-1`}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsServicesOpen(false);
                                      }}
                                    >
                                      {subItem.label}
                                    </a>
                                  )
                                ))}
                              </div>
                            </>
                          ) : (
                            service.href.startsWith('/') ? (
                              <Link
                                to={service.href}
                                className={`${isHomePage ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-brand-purple'} text-[15px] sm:text-[18px] font-bold py-1`}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                              >
                                {service.label}
                              </Link>
                            ) : (
                              <a
                                href={service.href}
                                className={`${isHomePage ? 'text-white/90 hover:text-white' : 'text-gray-800 hover:text-brand-purple'} text-[15px] sm:text-[18px] font-bold py-1`}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                              >
                                {service.label}
                              </a>
                            )
                          )}
                        </div>
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
              className={`block w-full ${isHomePage ? 'bg-white text-brand-purple' : 'bg-[#520378] text-white'} py-2.5 sm:py-3 rounded-full font-bold text-center text-sm sm:text-lg`}
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
