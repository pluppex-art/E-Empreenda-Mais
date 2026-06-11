
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Preencha o formulário',
    desc: 'Nome, WhatsApp e e-mail. Leva menos de 60 segundos. Sem compromisso de pagamento agora.',
  },
  {
    num: '02',
    title: 'Entre no Grupo VIP',
    desc: 'Você recebe conteúdos exclusivos de preparação e bastidores do Método E+ — antes de todo mundo.',
  },
  {
    num: '03',
    title: 'Receba o link com prioridade',
    desc: 'Membros do grupo têm acesso antecipado e exclusivo ao link de matrícula antes do público geral.',
  },
  {
    num: '04',
    title: 'Garanta sua vaga e comece em agosto',
    desc: 'Com 40 vagas por turma, o preenchimento é por ordem de chegada. Quem entra no grupo sai na frente.',
  },
];

const InsideGroup: React.FC = () => {
  return (
    <section className="bg-[#0a0f1e] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-amber-500 font-black text-sm uppercase tracking-[0.3em] mb-4">O processo de inscrição</div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-6 leading-tight">
            Como funciona a <span className="text-amber-500 italic">pré-inscrição?</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Simples, rápido e sem risco. O grupo VIP é o seu passaporte para a{' '}
            <span className="text-white font-medium">Turma 3 do Método E+.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-8 bg-[#0f172a] rounded-[2rem] border border-gray-800/50 hover:border-amber-500/30 transition-colors">
              <div className="bg-amber-500/10 w-12 h-12 flex items-center justify-center rounded-2xl">
                <span className="text-amber-500 font-black text-sm">{step.num}</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-amber-900/20 to-amber-600/10 border border-amber-500/30 p-8 md:p-12 rounded-[2.5rem] text-center">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 blur-[50px] rounded-full"></div>
           <p className="text-amber-500 font-black text-2xl md:text-3xl mb-3">
             ⚠️ 80 VAGAS NO TOTAL — 40 POR TURMA
           </p>
           <p className="text-white text-lg font-light leading-relaxed max-w-2xl mx-auto">
             O Grupo VIP fecha assim que atingir capacidade. Quem entra primeiro, garante primeiro.
             <br />
             <span className="text-gray-400 text-base">As turmas anteriores esgotaram antes da data de lançamento oficial.</span>
           </p>
        </div>
      </div>
    </section>
  );
};

export default InsideGroup;
