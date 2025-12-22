
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  const [error, setError] = useState(false);

  const logoUrl = "logo.png";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {!error ? (
        <img 
          src={logoUrl}
          alt="E-Empreenda +" 
          onError={(e) => {
            console.warn("Tentativa de carregar logo falhou em: " + logoUrl);
            setError(true);
          }}
          className="h-full w-auto object-contain drop-shadow-xl"
        />
      ) : (
        <div className="flex flex-col items-center">
          <span className="gold-text font-black text-2xl tracking-tighter whitespace-nowrap brand-name">
            E-EMPREENDA +
          </span>
          <span className="text-[8px] text-amber-500/50 tracking-[0.4em] font-bold uppercase whitespace-nowrap mt-0.5">
            Propósito & Execução
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
