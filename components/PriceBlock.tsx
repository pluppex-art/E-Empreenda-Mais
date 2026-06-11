
import React from 'react';

interface PriceBlockProps {
  onCtaClick: () => void;
}

const included = [
  '12 encontros presenciais semanais (Agosto–Outubro 2026)',
  'Acesso aos 3 mentores: Israel, João Filho e Gustavo',
  'Material e ferramentas de apoio semana a semana',
  'Comunidade exclusiva de 80 empreendedores selecionados',
  'Dupla Garantia (15 dias incondicional + performance)',
  'Plano de ação 90 dias pós-programa',
  'Networking no Pitch Day ao vivo',
];

const PriceBlock: React.FC<PriceBlockProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#0a0f1e] py-20 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
            Investimento
          </div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-4 leading-tight">
            Quanto vale transformar sua{' '}
            <span className="gold-text">vida profissional</span> em 12 semanas?
          </h2>
        </div>

        <div className="relative bg-[#0f172a] border border-amber-500/30 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
              Acesso completo · Turma 3 · Palmas, TO
            </p>

            <p className="text-[4rem] md:text-[5.5rem] font-black text-white leading-none mb-2">
              R$ 1.997
            </p>
            <p className="text-gray-400 text-base mb-1">à vista no Pix ou cartão</p>
            <p className="text-amber-500 font-bold text-xl mb-10">
              ou 12x de R$ 193,04 no cartão
            </p>

            {/* Value stack */}
            <div className="text-left space-y-3 mb-10 border-t border-white/5 pt-8">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-amber-500 font-black mt-0.5 shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onCtaClick}
              className="w-full gold-gradient text-gray-950 font-black text-base md:text-xl py-5 rounded-2xl btn-shadow hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_60px_rgba(191,149,63,0.35)]"
            >
              GARANTIR MINHA VAGA NA TURMA 3
            </button>

            <p className="text-gray-400 text-sm italic mt-6 border-t border-white/5 pt-6">
              Sua primeira venda realizada durante o programa já paga o investimento inteiro.
              E se não pagar — a Garantia 2 nos responsabiliza por isso.
            </p>

            <p className="text-amber-500/70 text-xs font-bold uppercase tracking-widest mt-4">
              Vagas limitadas · Turmas anteriores esgotaram antes do lançamento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBlock;
