
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import PainPoints from '../components/PainPoints.tsx';
import Movement from '../components/Movement.tsx';
import Curriculum from '../components/Curriculum.tsx';
import SocialProof from '../components/SocialProof.tsx';
import Mentors from '../components/Mentors.tsx';
import Guarantee from '../components/Guarantee.tsx';
import PriceBlock from '../components/PriceBlock.tsx';
import FAQ from '../components/FAQ.tsx';
import InsideGroup from '../components/InsideGroup.tsx';
import LeadForm from '../components/LeadForm.tsx';
import Footer from '../components/Footer.tsx';

interface LandingPageProps {
  onFormSubmit: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onFormSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="flex flex-col bg-[#010814] selection:bg-amber-500/30">
      <Header onCtaClick={openModal} />
      <Hero onCtaClick={openModal} />

      {/* Marquee banner */}
      <div className="bg-[#0b1221] py-4 border-y border-amber-500/20 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12 items-center">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-amber-500 font-black text-sm md:text-xl tracking-[0.5em] uppercase opacity-80">
              EMPREENDER TRANSFORMA VIDAS
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#020b1a] py-8 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:flex md:justify-center md:gap-24">
           <div className="flex flex-col items-center text-center group">
             <span className="text-xl md:text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">80</span>
             <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 mt-1">Vagas</span>
           </div>
           <div className="flex flex-col items-center text-center group">
             <span className="text-xl md:text-3xl font-bold text-white italic group-hover:text-amber-500 transition-colors">Agosto</span>
             <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 mt-1">Início 2026</span>
           </div>
           <div className="flex flex-col items-center text-center group">
             <span className="text-xl md:text-3xl font-bold text-white italic group-hover:text-amber-500 transition-colors">Visão</span>
             <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-bold">Execução</span>
           </div>
           <div className="flex flex-col items-center text-center group">
             <span className="text-xl md:text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">3ª</span>
             <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 mt-1">Edição</span>
           </div>
        </div>
      </div>

      <PainPoints />
      <Movement />
      <Curriculum onCtaClick={openModal} />
      <SocialProof />
      <Mentors onCtaClick={openModal} />
      <Guarantee onCtaClick={openModal} />
      <PriceBlock onCtaClick={openModal} />
      <FAQ />
      <InsideGroup />

      {/* Final CTA */}
      <div className="bg-[#010814] py-24 md:py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-[2.2rem] md:text-6xl font-black text-white mb-4 leading-tight">
            O próximo passo é uma decisão <br className="hidden md:block" />
            de <span className="gold-text">30 segundos.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl mb-10 font-light">
            Preencha o formulário. Entre no grupo. Receba o link.{' '}
            <span className="text-white font-semibold">Mude seu 2026.</span>
          </p>
          <button
            onClick={openModal}
            className="w-auto gold-gradient text-gray-950 font-black text-sm md:text-xl px-10 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-[0_20px_50px_rgba(191,149,63,0.3)] hover:scale-105 transition-all"
          >
            QUERO GARANTIR MINHA VAGA VIP
          </button>
        </div>
      </div>

      <Footer />

      {/* Floating mobile button */}
      {showFloatingBtn && (
        <div className="fixed bottom-6 left-6 right-6 z-[90] md:hidden">
          <button onClick={openModal} className="w-full gold-gradient text-gray-950 font-black py-4 rounded-xl shadow-2xl text-sm">
            GARANTIR MINHA VAGA — 3ª TURMA
          </button>
        </div>
      )}

      {/* Lead form modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative w-full max-w-lg glass-card p-8 md:p-12 rounded-t-[2.5rem] md:rounded-[3rem] border-amber-500/40 max-h-[95vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-6 right-6 text-gray-400 hover:text-white">
              <svg className="w-8 h-8 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="mb-6 text-center px-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                Garanta sua vaga —{' '}
                <span className="text-amber-500">Turma 3</span>
              </h3>
              <p className="text-gray-400 text-sm">Preencha em 30 segundos. Você entra no Grupo VIP imediatamente.</p>
            </div>
            {/* Mini checklist */}
            <div className="mb-6 px-2 space-y-2">
              {[
                'Acesso imediato ao Grupo VIP da Turma 3',
                'Conteúdos exclusivos de preparação antes das aulas',
                'Link de matrícula com prioridade antes do público geral',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-amber-500 font-black text-sm">✓</span>
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <LeadForm onSubmit={() => { closeModal(); onFormSubmit(); }} />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </main>
  );
};

export default LandingPage;
