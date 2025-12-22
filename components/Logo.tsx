
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  const [error, setError] = useState(false);

  // Assumindo que o arquivo logo.png contém a imagem da chama enviada
  const logoUrl = "logo.png";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {!error ? (
        <img 
          src={logoUrl}
          alt="E-Empreenda +" 
          onError={(e) => {
            console.warn("Logo não encontrada no caminho: " + logoUrl);
            setError(true);
          }}
          className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(191,149,63,0.3)]"
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
