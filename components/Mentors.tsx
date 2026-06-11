
import React from 'react';

interface MentorsProps {
  onCtaClick: () => void;
}

const mentors = [
  {
    initial: 'I',
    name: 'Israel',
    role: 'Fundador & Mentor Principal',
    bio: 'Especialista em mentalidade empreendedora e jornada do herói aplicada ao negócio. Israel fundou o Método E+ a partir de sua própria transformação — de servidor público a empreendedor de impacto em Palmas.',
  },
  {
    initial: 'J',
    name: 'João Filho',
    role: 'Mentor de Vendas & Execução',
    bio: 'Especialista em técnicas de venda presencial, fechamento e posicionamento de mercado. João Filho forma vendedores que constroem relações — não apenas fecham negócios.',
  },
  {
    initial: 'G',
    name: 'Gustavo',
    role: 'Mentor de Marketing & Oferta',
    bio: 'Referência em presença digital e construção de ofertas irrecusáveis. Gustavo ajuda empreendedores a aparecerem com autoridade e atraírem clientes por afinidade — não por pressão.',
  },
];

const Mentors: React.FC<MentorsProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#0a0f1e] py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
            Quem vai te mentorar
          </div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-4 leading-tight">
            3 mentores. 3 perspectivas.{' '}
            <span className="gold-text">1 método validado.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Você não aprende de quem leu sobre empreender — aprende de quem{' '}
            <span className="text-white font-semibold">fez.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="bg-[#0f172a] rounded-3xl border border-gray-800/50 hover:border-amber-500/30 p-8 flex flex-col items-center text-center transition-all"
            >
              <div className="w-24 h-24 rounded-full gold-gradient flex items-center justify-center text-3xl font-black text-gray-950 mb-6 shadow-lg">
                {mentor.initial}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
              <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{mentor.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{mentor.bio}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-base md:text-lg italic max-w-xl mx-auto mb-10">
          "Você não assiste a uma tela. Você senta à mesma mesa que seus mentores."
        </p>

        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="gold-gradient text-gray-950 font-black text-sm md:text-lg px-10 py-4 rounded-2xl btn-shadow hover:scale-105 active:scale-95 transition-all"
          >
            QUERO APRENDER COM ESSES MENTORES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
