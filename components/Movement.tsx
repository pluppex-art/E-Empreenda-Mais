
import React from 'react';

const pillars = [
  {
    title: 'Identidade & Propósito',
    desc: 'Você descobre o negócio que faz sentido para a SUA vida — não uma fórmula genérica de internet.',
    icon: '💎',
  },
  {
    title: 'Mentalidade de Legado',
    desc: 'Supere as crenças que te travaram até hoje. Empreender começa na cabeça antes de chegar na conta bancária.',
    icon: '🧠',
  },
  {
    title: 'Execução Prática',
    desc: 'Cada semana termina com um entregável real. Você sai com um negócio estruturado — não apenas com anotações.',
    icon: '⚡',
  },
  {
    title: 'Ecossistema',
    desc: '80 pessoas selecionadas que compartilham dos mesmos valores. Sua rede de apoio começa aqui.',
    icon: '🤝',
  },
];

const comparison = [
  { bad: 'Assista quando quiser (nunca assiste)', good: 'Presencial semanal — sem desculpas' },
  { bad: 'Suporte por email (sem resposta)', good: '3 mentores ao vivo toda semana' },
  { bad: 'Conteúdo genérico para qualquer pessoa', good: 'Nicho + modelo de negócio personalizados' },
  { bad: 'Alunos anônimos sem conexão real', good: 'Comunidade curada de 80 pessoas' },
];

const Movement: React.FC = () => {
  return (
    <section className="bg-[#0a0f1e] py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
          O que é o Método E+
        </div>
        <h2 className="text-[2.2rem] md:text-5xl font-bold mb-4 text-white leading-tight">
          O Método E+ não é mais um curso online que{' '}
          <span className="text-amber-500 italic">você esquece na segunda semana.</span>
        </h2>
        <p className="text-base md:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed">
          É um programa <span className="text-white font-semibold">presencial de 12 semanas</span> com mentores ao vivo,
          prática real e uma comunidade que responde — em Palmas, Tocantins.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800/50 hover:border-amber-500/30 transition-all text-left group">
              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{pillar.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="border-t border-amber-500/20 pt-14">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8 font-bold">Por que o Método E+ é diferente</p>
          <div className="max-w-3xl mx-auto bg-[#0f172a] rounded-3xl border border-gray-800/50 overflow-hidden divide-y divide-white/5">
            <div className="grid grid-cols-2 text-xs uppercase tracking-widest font-black">
              <div className="px-6 py-4 text-gray-600">Curso Online Comum</div>
              <div className="px-6 py-4 text-amber-500 border-l border-white/5">Método E+</div>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className="grid grid-cols-2 text-sm">
                <div className="px-6 py-4 text-gray-600 line-through text-left">{row.bad}</div>
                <div className="px-6 py-4 text-white font-medium text-left border-l border-white/5">
                  <span className="text-amber-500 mr-2">✓</span>{row.good}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movement;
