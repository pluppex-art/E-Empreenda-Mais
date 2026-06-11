
import React from 'react';

const pains = [
  {
    pain: 'Você trabalha muito, mas a vida financeira não avança.',
    expansion: 'A sensação de rodar em círculos enquanto o tempo passa — sem ver progresso real.',
    desire: 'LIBERDADE FINANCEIRA',
    label: 'Estagnação',
  },
  {
    pain: 'Você tem ideias, mas não sabe por onde começar.',
    expansion: 'Sem um passo a passo concreto, a energia vira ansiedade — e os projetos ficam na gaveta.',
    desire: 'MÉTODO E CLAREZA',
    label: 'Falta de Método',
  },
  {
    pain: 'O medo de errar paralisa mais do que qualquer obstáculo externo.',
    expansion: 'O que outros chamam de falta de coragem é, na verdade, falta de um ambiente seguro para testar e crescer.',
    desire: 'CONFIANÇA PARA AGIR',
    label: 'Medo',
  },
  {
    pain: 'Você empreende sozinho — sem rede, sem referência, sem troca real.',
    expansion: 'A ausência de uma comunidade de pares que compartilhe dos mesmos valores torna a jornada desnecessariamente difícil.',
    desire: 'COMUNIDADE E SUPORTE',
    label: 'Isolamento',
  },
  {
    pain: 'Depender de uma única fonte de renda é um risco que te tira o sono.',
    expansion: 'Você sente que deveria ter construído algo seu — mas nunca encontrou o momento ou o método certo.',
    desire: 'MÚLTIPLOS FLUXOS',
    label: 'Renda Única',
  },
];

const PainPoints: React.FC = () => {
  return (
    <section className="bg-[#010814] py-20 md:py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
            Você se reconhece aqui?
          </div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-4 leading-tight">
            Reconhece alguma dessas <span className="gold-text">situações?</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-light">
            Se 3 ou mais ressoaram com você — o Método E+ foi criado para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] rounded-3xl border border-gray-800/50 hover:border-amber-500/30 transition-all p-8 flex flex-col gap-4"
            >
              <span className="text-amber-500/50 text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
              <p className="text-white font-bold text-base md:text-lg leading-snug">{item.pain}</p>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.expansion}</p>
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                <span className="text-amber-500 text-lg font-black">→</span>
                <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">{item.desire}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Se você se reconheceu aqui,{' '}
            <span className="text-white font-semibold">não é falta de talento.</span>{' '}
            É falta de método.{' '}
            <br className="hidden md:block" />
            E é exatamente isso que o{' '}
            <span className="text-amber-500 font-bold">Método E+</span> entrega — em 12 semanas presenciais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
