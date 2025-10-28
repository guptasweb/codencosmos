import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { cn } from '../utils/cn';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-[#fef3c7]'
      )}
    >
      <div>
      {/* <div className="container-custom"> */}
        <div className="flex items-center justify-between py-4 px-6">
          <Link
            to="/"
            className="text-2xl font-bold text-[#7c2d12] hover:text-[#92400e] transition-colors duration-200"
          >
            Shivani Gupta
          </Link>
          
          {/* <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[#92400e] hover:text-[#7c2d12] font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#92400e] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav> */}

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-[#7c2d12] hover:text-[#92400e]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
