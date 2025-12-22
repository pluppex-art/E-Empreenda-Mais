
import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="bg-[#010814] py-20 md:py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed font-light">
              <p className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Esta Mentoria é para você que é:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-[#0f172a] rounded-xl border border-white/5">
                  <span className="text-amber-500 font-bold">✔</span>
                  <p className="text-white font-medium">Empregado CLT</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#0f172a] rounded-xl border border-white/5">
                  <span className="text-amber-500 font-bold">✔</span>
                  <p className="text-white font-medium">Empreendedor MEI</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#0f172a] rounded-xl border border-white/5">
                  <span className="text-amber-500 font-bold">✔</span>
                  <p className="text-white font-medium">Autônomo</p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#0f172a] rounded-xl border border-white/5">
                  <span className="text-amber-500 font-bold">✔</span>
                  <p className="text-white font-medium italic">Sonha em Empreender</p>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p>Busca <strong className="text-white">mais clareza e resultados</strong> no seu dia a dia?</p>
                <p>A Mentoria E-empreenda+ foi criada justamente para ajudar quem quer <strong className="text-amber-500">começar ou crescer</strong> com estratégia, apoio e visão prática.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-[2.5rem] md:text-6xl font-bold text-white mb-6 leading-tight">
              A Mentoria feita para o seu <br /> <span className="text-amber-500 italic">momento atual.</span>
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-md">
              Não importa se você ainda está no CLT ou se já possui um negócio estruturado. O que importa é a sua disposição para a transformação real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
