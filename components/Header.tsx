
import React, { useState, useEffect } from 'react';
import Logo from './Logo.tsx';

const Header: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#010814]/90 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center md:justify-between relative">
        <Logo className={scrolled ? "h-10 md:h-12 transition-all" : "h-16 md:h-20 transition-all"} />
        
        <button 
          onClick={onCtaClick}
          className={`hidden md:block gold-gradient text-gray-950 font-extrabold text-xs px-5 py-2.5 rounded-full btn-shadow transition-all duration-300 transform 
            ${scrolled ? 'opacity-100 scale-100' : 'opacity-100 scale-100'}`}
        >
          PRÉ-INSCRIÇÃO VIP
        </button>
      </div>
    </header>
  );
};

export default Header;
