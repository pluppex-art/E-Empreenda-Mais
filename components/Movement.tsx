
import React from 'react';

const Movement: React.FC = () => {
  const pillars = [
    { title: "Identidade & Propósito", desc: "Clareza total sobre quem você é e a marca que deseja deixar no mundo.", icon: "💎" },
    { title: "Mentalidade de Legado", desc: "Foco emocional e psicológico para empreender com resiliência e visão de longo prazo.", icon: "🧠" },
    { title: "Execução Prática", desc: "Método e ferramentas para transformar ideias em negócios sustentáveis.", icon: "⚡" },
    { title: "Ecossistema", desc: "Conexão real com empreendedores que compartilham dos mesmos valores e ambições.", icon: "🤝" },
  ];

  return (
    <section className="bg-[#0a0f1e] py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[2.2rem] md:text-5xl font-bold mb-6 text-white leading-tight">
          A <span className="brand-name">E-Empreenda+</span> <span className="text-amber-500 italic">não é apenas um curso</span>.
        </h2>
        <p className="text-base md:text-xl text-gray-400 mb-12 md:mb-20 max-w-3xl mx-auto font-light leading-relaxed">
          É um movimento focado em quem decidiu assumir a responsabilidade sobre a própria vida, unindo <span className="text-white font-semibold">pilares inegociáveis</span> para o sucesso com significado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800/50 hover:border-amber-500/30 transition-all text-left group">
              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{pillar.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movement;
