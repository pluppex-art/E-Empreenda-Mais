
import React, { useState } from 'react';

interface CurriculumProps {
  onCtaClick: () => void;
}

const acts = [
  {
    badge: 'Semanas 1–4',
    title: 'ATO 1 — PARTIDA',
    sub: 'O Despertar',
    goal: 'Despertar o propósito, vencer crenças limitantes e escolher o nicho certo.',
    weeks: [
      { num: '01', title: 'O Chamado', desc: 'Jornada do Herói + Mentalidade de Crescimento' },
      { num: '02', title: 'Descobrir o Propósito', desc: 'Ferramentas de autodescoberta e valores pessoais' },
      { num: '03', title: 'Vencer Crenças', desc: 'Identificar e superar limitações sobre negócios e sucesso' },
      { num: '04', title: 'Escolher o Nicho', desc: 'Mercado, público-alvo e validação inicial' },
    ],
  },
  {
    badge: 'Semanas 5–10',
    title: 'ATO 2 — INICIAÇÃO',
    sub: 'A Construção',
    goal: 'Estruturar o negócio, aprender a vender e executar as primeiras vendas reais.',
    weeks: [
      { num: '05', title: 'Modelo de Negócio', desc: 'Canvas, proposta de valor, fluxo de receita' },
      { num: '06', title: 'Mentalidade de Vendedor', desc: 'Mindset de vendas, rejeição e resiliência' },
      { num: '07', title: 'Técnicas de Venda', desc: 'Descoberta, posicionamento, fechamento' },
      { num: '08', title: 'Presença e Comunicação', desc: 'Aparecer, contar história, autenticidade' },
      { num: '09', title: 'Marketing e Oferta', desc: 'Criação de oferta irrecusável, canais e estratégia' },
      { num: '10', title: 'Execução Prática', desc: 'Preparação completa para o Pitch Day' },
    ],
  },
  {
    badge: 'Semanas 11–12',
    title: 'ATO 3 — RETORNO',
    sub: 'A Colheita',
    goal: 'Apresentar projetos, fazer as primeiras vendas e se tornar parte do movimento E+.',
    weeks: [
      { num: '11', title: 'Pitch Day', desc: 'Apresentações ao vivo, feedback dos mentores, networking real' },
      { num: '12', title: 'Celebração e Próximos Passos', desc: 'Resultados alcançados, comunidade pós-programa, plano 90 dias' },
    ],
  },
];

const Curriculum: React.FC<CurriculumProps> = ({ onCtaClick }) => {
  const [activeAct, setActiveAct] = useState<number>(0);

  return (
    <section className="bg-[#020617] py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
            A Jornada Completa
          </div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-4 leading-tight">
            12 semanas. 3 Atos.{' '}
            <span className="gold-text">1 negócio estruturado — o seu.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Cada semana tem uma entrega concreta. Você não assiste vídeos — você <span className="text-white font-semibold">constrói.</span>
          </p>
        </div>

        {/* Mobile: accordion tabs */}
        <div className="flex gap-2 mb-8 md:hidden overflow-x-auto pb-2">
          {acts.map((act, i) => (
            <button
              key={i}
              onClick={() => setActiveAct(i)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeAct === i
                  ? 'bg-amber-500 text-gray-950'
                  : 'bg-[#0f172a] text-gray-400 border border-gray-800/50'
              }`}
            >
              {act.badge}
            </button>
          ))}
        </div>

        {/* Mobile: single act */}
        <div className="md:hidden">
          {acts.map((act, i) => (
            <div key={i} className={activeAct === i ? 'block' : 'hidden'}>
              <ActCard act={act} />
            </div>
          ))}
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {acts.map((act, i) => (
            <ActCard key={i} act={act} />
          ))}
        </div>

        {/* Result promise */}
        <div className="mt-14 bg-gradient-to-r from-amber-900/20 to-transparent border border-amber-500/30 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-amber-500 font-black text-sm uppercase tracking-widest mb-3">Resultado garantido ao final</p>
          <p className="text-white font-bold text-2xl md:text-3xl mb-2">
            Negócio estruturado + primeira venda realizada.
          </p>
          <p className="text-gray-400 text-base font-light max-w-xl mx-auto mb-8">
            Essa é a promessa do Método E+. E se não acontecer, nossa Garantia Dupla te cobre 100%.
          </p>
          <button
            onClick={onCtaClick}
            className="gold-gradient text-gray-950 font-black text-sm md:text-lg px-10 py-4 rounded-2xl btn-shadow hover:scale-105 active:scale-95 transition-all"
          >
            QUERO GARANTIR MINHA VAGA
          </button>
        </div>
      </div>
    </section>
  );
};

const ActCard: React.FC<{ act: typeof acts[0] }> = ({ act }) => (
  <div className="bg-[#0f172a] rounded-3xl border border-gray-800/50 p-8 flex flex-col">
    <div className="mb-6">
      <span className="text-[10px] font-black uppercase tracking-widest text-amber-500/60">{act.badge}</span>
      <h3 className="text-xl font-black text-white mt-1 gold-text">{act.title}</h3>
      <p className="text-gray-400 text-sm italic mt-0.5">{act.sub}</p>
      <p className="text-gray-500 text-xs mt-3 leading-relaxed border-t border-white/5 pt-3">{act.goal}</p>
    </div>
    <div className="flex flex-col divide-y divide-white/5">
      {act.weeks.map((week) => (
        <div key={week.num} className="flex gap-3 py-3">
          <span className="text-amber-500/40 font-black text-xs w-6 shrink-0 mt-0.5">{week.num}</span>
          <div>
            <p className="text-white font-bold text-sm leading-snug">{week.title}</p>
            <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{week.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Curriculum;
