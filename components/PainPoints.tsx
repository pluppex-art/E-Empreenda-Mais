
import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="bg-[#010814] py-20 md:py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8 text-base md:text-xl text-gray-300 leading-relaxed font-light">
              <div className="flex gap-5">
                <span className="text-amber-500 font-bold shrink-0">✔</span>
                <p>Sente que nasceu para algo maior, mas a rotina consome sua energia e seus sonhos?</p>
              </div>
              <div className="flex gap-5">
                <span className="text-amber-500 font-bold shrink-0">✔</span>
                <p>Já tentou empreender, mas travou por falta de clareza, processos ou direção estratégica?</p>
              </div>
              <div className="flex gap-5">
                <span className="text-amber-500 font-bold shrink-0">✔</span>
                <p>Não quer mais ter que escolher entre seus valores espirituais e o resultado financeiro?</p>
              </div>
              <div className="flex gap-5">
                <span className="text-amber-500 font-bold shrink-0">✔</span>
                <p className="text-white font-semibold italic">Está cansado de cursos vazios e busca uma execução real no mercado.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-[2.5rem] md:text-6xl font-bold text-white mb-6 leading-tight">
              Você se <br /> <span className="text-amber-500 italic">identifica com isso?</span>
            </h2>
            <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
              Se você respondeu "sim" para pelo menos uma dessas perguntas, o grupo de pré-inscrição é o seu próximo passo natural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
