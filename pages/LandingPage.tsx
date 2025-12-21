
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Movement from '../components/Movement';
import SocialProof from '../components/SocialProof';
import InsideGroup from '../components/InsideGroup';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';

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
      
      {/* Social Proof Bar */}
      <div className="bg-[#020b1a] py-8 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-4 md:flex md:justify-center md:gap-24">
           <div className="flex flex-col items-center text-center group">
             <span className="text-xl md:text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">40</span>
             <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 mt-1">Vagas Reais</span>
           </div>
           <div className="flex flex-col items-center text-center group">
             <span className="text-xl md:text-3xl font-bold text-white italic group-hover:text-amber-500 transition-colors">Fé &</span>
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
      <SocialProof />
      <InsideGroup />
      
      {/* Seção final com CTA */}
      <div className="bg-[#010814] py-24 md:py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-[2.2rem] md:text-6xl font-black text-white mb-6 leading-tight">
            Essa não é uma decisão <br className="hidden md:block" /> impulsiva. É <span className="gold-text">consciente</span>.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto">
            Entre no grupo agora e entenda se o <span className="text-white font-medium">Método E+</span> é o ambiente certo para o seu crescimento.
          </p>
          <button 
            onClick={openModal}
            className="w-full md:w-auto gold-gradient text-gray-950 font-black text-lg md:text-xl px-12 py-6 rounded-2xl shadow-[0_20px_50px_rgba(191,149,63,0.3)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            QUERO ENTRAR NO GRUPO VIP
          </button>
          <p className="mt-6 text-amber-500/60 text-xs md:text-sm uppercase tracking-[0.2em] font-bold animate-pulse">Apenas 40 vagas disponíveis na Turma 3</p>
        </div>
      </div>

      <Footer />

      {/* Floating CTA Button (Mobile Only) */}
      <div className={`fixed bottom-6 left-6 right-6 z-[90] md:hidden transition-all duration-500 transform ${showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button 
          onClick={openModal}
          className="w-full gold-gradient text-gray-950 font-black py-4 rounded-xl shadow-[0_10px_30px_rgba(191,149,63,0.5)] border border-white/20 active:scale-95"
        >
          GARANTIR MINHA VAGA VIP
        </button>
      </div>

      {/* Modal do Formulário */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
          ></div>
          
          <div className="relative w-full max-w-lg glass-card p-8 md:p-12 rounded-t-[2.5rem] md:rounded-[3rem] border-t-2 md:border-2 border-amber-500/40 shadow-[0_0_120px_rgba(191,149,63,0.2)] animate-in slide-in-from-bottom-10 md:slide-in-from-bottom-0 md:zoom-in-95 duration-300 max-h-[95vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <svg className="w-8 h-8 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="text-center mb-8">
              <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em]">
                Convite Exclusivo
              </div>
              <h2 className="text-[1.75rem] md:text-3xl font-bold text-white mb-3 leading-tight">
                Destrave sua <span className="gold-text">Vaga VIP</span>
              </h2>
              <p className="text-gray-300 text-sm px-4 leading-relaxed font-light">
                Você será redirecionado para o grupo de preparação para a <span className="text-white font-bold">Turma 3</span>.
              </p>
            </div>

            <LeadForm onSubmit={() => {
              closeModal();
              onFormSubmit();
            }} />
            
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-[10px] uppercase tracking-tighter pb-4 md:pb-0 font-bold">
               <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
               Dados protegidos sob o selo <span className="brand-name gold-text">E-Empreenda+</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default LandingPage;
