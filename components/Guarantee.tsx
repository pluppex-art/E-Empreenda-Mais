
import React from 'react';

interface GuaranteeProps {
  onCtaClick: () => void;
}

const Guarantee: React.FC<GuaranteeProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#010814] py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/8 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
            Tolerância zero ao risco
          </div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-4 leading-tight">
            Dupla Garantia <span className="gold-text">Incondicional</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto font-light">
            Você entra com zero risco. <span className="text-white font-semibold">Literalmente.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Garantia 1 */}
          <div className="relative bg-[#0f172a] border border-amber-500/30 rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-4 -right-4 text-[120px] font-black text-amber-500/5 leading-none select-none pointer-events-none">15</div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500/70 mb-4 block">Garantia 1 · 15 dias</span>
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-2xl mb-3">Satisfação Total ou Dinheiro de Volta</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Participe das 2 primeiras sessões presenciais. Se por qualquer motivo — e{' '}
                <span className="text-white font-medium">não precisamos saber qual</span> — você decidir que
                o Método E+ não é para você, devolvemos 100% do seu investimento. Sem perguntas. Sem burocracia.
              </p>
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4">
                <p className="text-amber-500 text-sm font-bold italic">
                  "Você tem 15 dias para decidir com seu próprio corpo se isso é real."
                </p>
              </div>
            </div>
          </div>

          {/* Garantia 2 */}
          <div className="relative bg-[#0f172a] border border-amber-500/30 rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-4 -right-4 text-[100px] font-black text-amber-500/5 leading-none select-none pointer-events-none">R$</div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500/70 mb-4 block">Garantia 2 · Resultado garantido</span>
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-2xl mb-3">Sem resultado? Devolvemos + R$500</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Se você completar <span className="text-white font-medium">100% das aulas e atividades</span> e
                não tiver estruturado um negócio E não tiver realizado sua primeira venda ao final das 12 semanas —
                devolvemos TODO o investimento +{' '}
                <span className="text-amber-500 font-bold">R$500 via Pix</span> + sessão de mentoria exclusiva com os 3 mentores.
              </p>
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4">
                <p className="text-amber-500 text-sm font-bold italic">
                  "Essa garantia existe porque temos certeza do que entregamos."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seal */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-32 h-32 rounded-full border-4 border-amber-500/50 flex flex-col items-center justify-center gap-0.5">
            <span className="text-amber-500 text-[9px] font-black tracking-widest uppercase">Garantia</span>
            <span className="gold-text font-black text-2xl leading-none">Dupla</span>
            <span className="text-amber-500 text-xs font-bold">E+</span>
          </div>

          <div className="text-center">
            <p className="text-white font-bold text-lg md:text-2xl mb-6">
              Agora você não tem mais desculpa.
            </p>
            <button
              onClick={onCtaClick}
              className="gold-gradient text-gray-950 font-black text-sm md:text-lg px-10 py-4 rounded-2xl btn-shadow hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(191,149,63,0.3)]"
            >
              QUERO GARANTIR MINHA VAGA COM SEGURANÇA TOTAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
