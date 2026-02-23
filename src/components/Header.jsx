import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  // State to handle header background on scroll for home page
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = isAboutPage
    ? 'bg-white border-b border-gray-100 shadow-sm'
    : isScrolled
      ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100'
      : 'bg-white/60 backdrop-blur-md border-b border-white/20';

  const textClasses = isScrolled || isAboutPage ? 'text-gray-800' : 'text-gray-800';

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center h-16 sm:h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/logo (1) 1.png"
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
              <li key={item.label} className="flex items-center gap-1 group cursor-pointer">
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="font-medium text-[14px] sm:text-[15px] text-gray-700 transition-colors flex items-center gap-1 hover:text-brand-purple"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="font-medium text-[14px] sm:text-[15px] text-gray-700 transition-colors flex items-center gap-1 hover:text-brand-purple"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center bg-brand-purple text-white px-8 py-3 rounded-full font-semibold text-[15px] hover:bg-brand-purple-light transition-all">
            Upcoming events
          </button>
          <button className="hidden sm:flex items-center justify-center bg-brand-purple text-white p-3 rounded-full hover:bg-brand-purple-light transition-all group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button
            className="lg:hidden ml-4 text-2xl p-2 md:block text-brand-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-brand-purple border-t border-white/10 overflow-hidden transition-all duration-300 shadow-xl ${isMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col gap-5 px-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'About us', href: '/about' },
            { label: 'Services', href: '#services' },
            { label: 'Blogs', href: '#blogs' },
            { label: 'Contact us', href: '#contact' }
          ].map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/') ? (
                <Link
                  to={item.href}
                  className="block text-lg font-medium text-white/90 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="block text-lg font-medium text-white/90 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li className="pt-2">
            <button className="w-full bg-white text-brand-purple py-3 rounded-full font-bold">Upcoming events</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
