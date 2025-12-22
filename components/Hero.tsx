
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Background overlay premium */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#010814]"></div>
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover opacity-20"
          alt="Business Mastermind"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010814]/90 via-[#010814]/80 to-[#010814]"></div>
      </div>
      
      {/* Efeito de luz ambiente / Aura focal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-500/15 blur-[80px] rounded-full z-0 pointer-events-none animate-pulse"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        <div className="mb-6 md:mb-8 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm inline-flex items-center gap-2">
           <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
           <span className="text-amber-500 font-bold text-[9px] md:text-xs tracking-[0.25em] uppercase">
             Vagas Limitadas para a <span className="whitespace-nowrap">Mentoria E-empreenda+</span> (Turma 3)
           </span>
        </div>
        
        <h1 className="text-[2.6rem] md:text-7xl lg:text-8xl font-black mb-6 text-white leading-[1.05] tracking-tight">
          Desperte o <span className="gold-text">Empreendedor</span> que <br className="hidden md:block" /> 
          existe em você.
        </h1>

        <p className="text-base md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light opacity-95">
          Entre no grupo exclusivo onde você vai entender, com clareza, se a <span className="whitespace-nowrap"><strong className="text-white italic underline decoration-amber-500/50">Mentoria E-empreenda+</strong></span> é o seu próximo passo para construir um negócio com propósito e visão prática.
        </p>
        
        <p className="text-amber-500/80 text-sm md:text-base mb-10 font-medium italic">
          "Empreender transforma vidas." Esteja pronto para liderar com consciência e valores inegociáveis.
        </p>

        <div className="w-full flex flex-col items-center gap-8">
          <button 
            onClick={onCtaClick}
            className="w-full md:w-auto gold-gradient text-gray-950 font-black text-lg md:text-xl px-12 md:px-20 py-5 md:py-6 rounded-2xl btn-shadow hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_60px_rgba(191,149,63,0.4)]"
          >
            QUERO ATIVAR O EMPREENDEDOR QUE HÁ EM MIM
          </button>
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-2.5">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-[#010814] bg-gray-700 overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/150?u=${i+25}`} alt="Membro da Comunidade" />
                </div>
              ))}
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-[#010814] bg-amber-500 flex items-center justify-center text-[10px] md:text-xs font-black text-gray-950 shadow-lg">+196</div>
            </div>
            <p className="text-gray-400 text-[10px] md:text-sm font-medium">Junte-se a <span className="text-white font-bold">centenas de empreendedores</span> com visão.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
