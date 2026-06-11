
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const VIDEO_EMBED_URL = 'https://drive.google.com/file/d/1LMc1TtoN32thDhxFIhV3iZyBIaXQrdP8/preview';

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#010814]"></div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
          className="w-full h-full object-cover opacity-10"
          alt="Business Mastermind"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010814]/90 via-[#010814]/80 to-[#010814]"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-amber-500/10 blur-[100px] rounded-full z-0 pointer-events-none animate-pulse"></div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">

        {/* Badge — full width, centered above split */}
        <div className="mb-8 md:mb-10 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping"></span>
          <span className="text-amber-500 font-bold text-[9px] md:text-xs tracking-[0.15em] uppercase">
            3ª Turma · Agosto–Outubro 2026 · Palmas, TO · Inscrições abertas
          </span>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center w-full">

          {/* Left column — text + CTA */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-[2.4rem] md:text-5xl lg:text-6xl font-black mb-5 text-white leading-[1.08] tracking-tight">
              Você está cansado de trabalhar muito e{' '}
              <span className="gold-text">não sair do lugar?</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-6 max-w-xl leading-[1.65] font-light">
              O <span className="text-white font-bold">Método E+</span> transforma essa estagnação em um negócio estruturado —
              em <span className="text-white font-semibold">12 semanas presenciais</span> com 3 mentores ao vivo em Palmas, Tocantins.
            </p>

            <p className="text-gray-500 text-sm mb-8 font-medium tracking-wide">
              Agosto–Outubro 2026 &nbsp;·&nbsp; Palmas, TO &nbsp;·&nbsp; 3 Mentores &nbsp;·&nbsp; 80 Vagas
            </p>

            {/* Mobile video — between subtitle and CTA */}
            <div className="md:hidden w-full mb-8">
              <VideoPlayer />
            </div>

            <button
              onClick={onCtaClick}
              className="w-full md:w-auto gold-gradient text-gray-950 font-black text-sm md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl btn-shadow hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_60px_rgba(191,149,63,0.4)]"
            >
              QUERO GARANTIR MINHA VAGA VIP
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mt-5">
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

            {/* Social proof cluster */}
            <div className="flex flex-col items-center md:items-start gap-2 mt-6">
              <div className="flex -space-x-2.5">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#010814] bg-gray-700 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/150?u=${i+25}`} alt="Aluno" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#010814] bg-amber-500 flex items-center justify-center text-[10px] font-black text-gray-950 shadow-lg">+</div>
              </div>
              <p className="text-gray-400 text-[10px] md:text-sm font-medium">
                Mais de <span className="text-white font-bold">80 alunos</span> transformados nas turmas 1 e 2.
              </p>
            </div>
          </div>

          {/* Right column — video (desktop only) */}
          <div className="hidden md:block">
            <VideoPlayer />
          </div>

        </div>
      </div>
    </section>
  );
};

const VideoPlayer: React.FC = () => (
  <div className="relative w-full rounded-3xl border border-amber-500/30 overflow-hidden shadow-[0_20px_60px_rgba(191,149,63,0.2)]">
    <div className="relative" style={{ paddingTop: '56.25%' }}>
      <iframe
        src={VIDEO_EMBED_URL}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen"
        allowFullScreen
        frameBorder="0"
        title="Método E+ — Apresentação"
      />
    </div>
  </div>
);

export default Hero;
