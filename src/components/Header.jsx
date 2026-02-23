import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-[1000] border-bottom border-black/5">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-20">
        <div className="flex items-center gap-2.5 font-extrabold text-2xl text-brand-purple tracking-wider">
          <span>🌿</span>
          <span>VRIKSH</span>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-7.5">
            {['Programs', 'Courses', 'Products', 'Why Vriksh?', 'Blog'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-medium text-sm text-gray-800 hover:text-brand-purple transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <button className="btn-primary">Register Now</button>
          <button
            className="lg:hidden text-2xl text-brand-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-5 shadow-xl">
          <ul className="flex flex-col gap-4">
            {['Programs', 'Courses', 'Products', 'Why Vriksh?', 'Blog'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block font-medium text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
