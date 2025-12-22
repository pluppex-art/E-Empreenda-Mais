
import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010814] pt-20 pb-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <Logo className="h-24 mb-4" />
             <p className="text-gray-500 text-sm max-w-sm">
               Ativando o empreendedor através do propósito. <br />
               Unindo identidade, estratégia e execução real.
             </p>
          </div>
          
          <div className="flex gap-10 text-gray-400 font-medium text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-500 transition-colors">YouTube</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Suporte</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <div>&copy; {new Date().getFullYear()} <span className="brand-name">E-Empreenda +</span></div>
          <div className="flex gap-6">
            <span>Privacidade</span>
            <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
