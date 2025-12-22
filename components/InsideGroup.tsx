
import React from 'react';

const InsideGroup: React.FC = () => {
  const items = [
    { title: "Conteúdos de Preparação", desc: "Receba materiais exclusivos que vão preparar sua mente para a Turma 3." },
    { title: "Bastidores do Método E+", desc: "Entenda a estrutura por trás dos negócios que unem propósito e lucro." },
    { title: "Acesso Antecipado", desc: "Garanta o link de inscrição antes de todo mundo e com bônus de fundação." },
    { title: "Networking Curado", desc: "Conecte-se com empreendedores que buscam os mesmos valores que você." }
  ];

  return (
    <section className="bg-[#0a0f1e] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-amber-500 font-black text-sm uppercase tracking-[0.3em] mb-4">Ambiente VIP</div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-6 leading-tight">
            Por que você <span className="text-amber-500 italic">PRECISA</span> estar no Grupo?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Não é apenas um grupo de avisos. É o seu ambiente de <span className="text-white font-medium">preparação intensiva</span> para decidir com consciência o seu próximo passo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-8 bg-[#0f172a] rounded-[2rem] border border-gray-800/50 hover:bg-amber-500/[0.02] transition-colors">
              <div className="bg-amber-500/10 w-12 h-12 flex items-center justify-center rounded-2xl">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-amber-900/20 to-amber-600/10 border border-amber-500/30 p-8 md:p-12 rounded-[2.5rem] text-center group">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 blur-[50px] rounded-full"></div>
           <p className="text-amber-500 font-black text-2xl md:text-3xl mb-3">
             ⚠️ APENAS 40 VAGAS PRESENCIAIS
           </p>
           <p className="text-white text-lg font-light leading-relaxed max-w-2xl mx-auto">
             Prezamos pela curadoria extrema. Uma vez preenchidas no grupo de pré-inscrição, não abriremos exceções para a Turma 3.
           </p>
        </div>
      </div>
    </section>
  );
};

export default InsideGroup;
