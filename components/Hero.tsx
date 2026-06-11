
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#010814]"></div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
          className="w-full h-full object-cover opacity-20"
          alt="Business Mastermind"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010814]/90 via-[#010814]/80 to-[#010814]"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-500/15 blur-[80px] rounded-full z-0 pointer-events-none animate-pulse"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center">
        <div className="mb-6 md:mb-8 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm inline-flex items-center gap-2">
           <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
           <span className="text-amber-500 font-bold text-[9px] md:text-xs tracking-[0.15em] uppercase">
             3ª Turma · Agosto–Outubro 2026 · Palmas, TO · Inscrições abertas
           </span>
        </div>

        <h1 className="text-[2.4rem] md:text-6xl lg:text-7xl font-black mb-6 text-white leading-[1.08] tracking-tight">
          Você está cansado de trabalhar<br className="hidden md:block" /> muito e{' '}
          <span className="gold-text">não sair do lugar?</span>
        </h1>

        <div className="text-base md:text-[1.25rem] text-gray-400 mb-8 max-w-3xl mx-auto leading-[1.65] font-light">
          O <span className="text-white font-bold">Método E+</span> transforma essa estagnação em um negócio estruturado —
          em <span className="text-white font-semibold">12 semanas presenciais</span> com 3 mentores ao vivo em Palmas, Tocantins.
        </div>

        <p className="text-gray-500 text-sm md:text-base mb-10 font-medium tracking-wide">
          Agosto–Outubro 2026 &nbsp;·&nbsp; Palmas, TO &nbsp;·&nbsp; 3 Mentores &nbsp;·&nbsp; 80 Vagas
        </p>

        <div className="w-full flex flex-col items-center gap-6">
          <button
            onClick={onCtaClick}
            className="w-auto gold-gradient text-gray-950 font-black text-sm md:text-xl px-8 md:px-20 py-4 md:py-6 rounded-xl md:rounded-2xl btn-shadow hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_60px_rgba(191,149,63,0.4)] tracking-tight md:tracking-normal"
          >
            QUERO GARANTIR MINHA VAGA VIP
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: '🛡️', label: 'Garantia de 15 dias' },
              { icon: '💳', label: '12x no cartão' },
              { icon: '📍', label: 'Presencial em Palmas, TO' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-2.5">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-[#010814] bg-gray-700 overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/150?u=${i+25}`} alt="Aluno" />
                </div>
              ))}
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-[#010814] bg-amber-500 flex items-center justify-center text-[10px] md:text-xs font-black text-gray-950 shadow-lg">+</div>
            </div>
            <p className="text-gray-400 text-[10px] md:text-sm font-medium">
              Mais de <span className="text-white font-bold">80 alunos</span> transformados nas turmas 1 e 2.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
