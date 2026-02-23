import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/5 backdrop-blur-md z-[1000] border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center h-16 sm:h-20">
        <div className="flex items-center">
          <img src="/logo (1) 1.png" alt="VRIKSH Logo" className="h-8 sm:h-11 w-auto object-contain" />
        </div>

        <nav className="hidden lg:block ml-auto mr-10">
          <ul className="flex gap-8 sm:gap-10">
            {[
              { label: 'Home', href: '/' },
              { label: 'About us', href: '#about' },
              { label: 'Services', href: '#services', hasDropdown: true },
              { label: 'Blogs', href: '#blogs' },
              { label: 'Contact us', href: '#contact' }
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-1 group cursor-pointer">
                <a
                  href={item.href}
                  className="font-medium text-[14px] sm:text-[15px] text-white/90 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center bg-brand-purple text-white px-8 py-3 rounded-full font-semibold text-[15px] hover:bg-brand-purple/90 transition-all">
            Upcoming events
          </button>
          <button className="hidden sm:flex items-center justify-center bg-brand-purple text-white p-3 rounded-full hover:bg-brand-purple/90 transition-all group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <button
            className="lg:hidden ml-4 text-2xl text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-brand-purple border-t border-white/10 overflow-hidden transition-all duration-300 shadow-xl ${isMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col gap-5 px-6">
          {['Home', 'About us', 'Services', 'Blogs', 'Contact us'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-lg font-medium text-white/90 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
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
