
import React from 'react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Gustavo Oliveira",
      role: "Estrategista Digital",
      text: "Escalar um negócio digital exige muito mais que apenas técnica; exige uma base sólida de princípios. Na <span class='brand-name text-amber-500 font-bold'>E-Empreenda+</span> Escola de Negócios encontrei o equilíbrio perfeito entre métricas agressivas e propósito inegociável.",
    },
    {
      name: "Renata Luz",
      role: "Recriar Crochê",
      text: "O crochê era meu refúgio, mas na Escola virou meu negócio real. Aprendi a sair do amadorismo, valorizar meu trabalho e estruturar processos que me permitem crescer sem perder a essência do que eu faço com as mãos.",
    },
    {
      name: "Marcus Vinicius",
      role: "Servidor Público",
      text: "Como servidor, eu buscava segurança, mas sentia um chamado latente para frutificar fora do sistema. A Escola me deu a coragem e, principalmente, o método para empreender com responsabilidade e clareza de direção.",
    },
    {
      name: "Eduarda Porto",
      role: "Farmacêutica Esteta",
      text: "Minha clínica mudou de patamar quando entendi que ser uma excelente profissional técnica é diferente de ser uma dona de clínica de sucesso. O <span class='brand-name text-amber-500 font-bold'>Método E+</span> foi o divisor de águas na minha gestão.",
    },
    {
      name: "Gustavo Oliveira",
      role: "Instrutor de Canto",
      text: "Viver de arte é um desafio constante. A Escola me ensinou a gerir minha carreira como uma empresa, trazendo previsibilidade financeira e uma autoridade que eu não conseguia construir sozinho no mercado de ensino.",
    },
    {
      name: "Joao Filho",
      role: "Gestor de Tráfego",
      text: "Gerir tráfego é gerir confiança e capital. Na comunidade da <span class='brand-name text-amber-500 font-bold'>E-Empreenda+</span>, conectei-me com parceiros de alto nível e melhorei minha entrega ética e estratégica para meus clientes de forma extraordinária.",
    },
    {
      name: "Israel de Freitas",
      role: "Mentor de Identidade e Propósito",
      text: "Tudo começa na identidade. Vi na prática como negócios prosperam quando o empreendedor sabe quem ele é e para onde está indo. A Escola é o ambiente perfeito para quem busca essa profundidade unida à execução prática.",
    }
  ];

  return (
    <section className="bg-[#020617] py-24 px-6 overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
            Depoimentos Reais
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Onde a estratégia encontra a <span className="gold-text">Transformação</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Não vendemos métodos de "fique rico rápido". Nossos alunos constroem bases sólidas que suportam o crescimento a longo prazo sob os princípios da <span className="brand-name">E-Empreenda + Escola de Negócios</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={`${t.name}-${t.role}-${idx}`} 
              className={`bg-[#0f172a] p-8 rounded-3xl border border-gray-800/50 hover:border-amber-500/20 transition-all shadow-xl flex flex-col justify-between ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                <div className="flex text-amber-500 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-base md:text-lg italic leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: `"${t.text}"` }} />
              </div>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div>
                  <p className="text-white font-bold text-base leading-none mb-1">{t.name}</p>
                  <p className="text-amber-500/70 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white italic">MÉTODO</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Validado</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Propósito</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">3ª</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Turma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
