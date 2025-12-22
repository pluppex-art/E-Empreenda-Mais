
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG da Chama Dourada (Recriação vetorial da imagem enviada) */}
      <svg 
        viewBox="0 0 100 120" 
        className="h-full w-auto drop-shadow-[0_0_15px_rgba(191,149,63,0.4)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold-gradient-logo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bf953f" />
            <stop offset="50%" stopColor="#fcf6ba" />
            <stop offset="100%" stopColor="#b38728" />
          </linearGradient>
        </defs>
        
        {/* A Chama/Símbolo - 3 pétalas/gomos estilizados */}
        <path 
          d="M50 5C50 5 85 45 85 70C85 88 72 95 50 95C28 95 15 88 15 70C15 55 35 30 35 30C35 30 25 50 25 70C25 82 35 88 50 88C65 88 75 82 75 70C75 52 50 15 50 15C50 15 58 35 58 55C58 65 52 70 50 70C48 70 42 65 42 55C42 40 50 5 50 5Z" 
          fill="url(#gold-gradient-logo)" 
        />
      </svg>

      <div className="flex flex-col items-start justify-center">
        <span className="gold-text font-black text-2xl tracking-tighter brand-name leading-none">
          E-EMPREENDA +
        </span>
        <span className="text-[7px] md:text-[8px] text-amber-500/50 tracking-[0.4em] font-bold uppercase whitespace-nowrap mt-1">
          Propósito & Execução
        </span>
      </div>
    </div>
  );
};

export default Logo;
