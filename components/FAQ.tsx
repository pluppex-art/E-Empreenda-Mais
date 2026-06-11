
import React, { useState } from 'react';

const faqs = [
  {
    q: 'Não tenho tempo — trabalho o dia todo.',
    a: 'O programa é 1 sessão presencial por semana. A maioria dos nossos alunos das turmas 1 e 2 eram empregados CLT ou servidores públicos. A sessão semanal é o seu compromisso mínimo — o resto você constrói no seu ritmo. Quem diz que não tem tempo, na verdade, ainda não encontrou o porquê que justifique reorganizá-lo.',
  },
  {
    q: 'R$1.997 é muito dinheiro para mim agora.',
    a: 'Entendemos. É por isso que oferecemos 12x no cartão. Mas pense assim: sua primeira venda realizada durante o programa já cobre o investimento inteiro. E a Garantia 2 significa que, se você não vender, devolvemos tudo + R$500. O risco financeiro real é zero — desde que você apareça.',
  },
  {
    q: 'Já fiz cursos online e não funcionou.',
    a: 'Cursos online falham pela mesma razão: ninguém te faz aparecer. O Método E+ é presencial, semanal, em Palmas. Seus mentores conhecem seu rosto. Sua turma acompanha sua evolução. Não há onde se esconder — e essa é exatamente a vantagem. Comprometimento real produz resultado real.',
  },
  {
    q: 'E se eu começar e perceber que não é para mim?',
    a: 'Você tem 15 dias e 2 sessões para decidir. Se não for para você — por qualquer motivo — devolvemos 100% do valor pago. Sem perguntas, sem formulários complicados. A Garantia 1 elimina esse risco completamente.',
  },
  {
    q: 'Preciso ter um negócio antes de começar?',
    a: 'Não. A maioria das pessoas entra na Semana 1 sem saber ainda qual negócio quer montar. É exatamente na Semana 4 — "Escolher o Nicho" — que você valida sua ideia com método. Você não precisa de uma ideia pronta. Precisa de disposição para encontrá-la.',
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#020617] py-20 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-amber-500/10 text-amber-500 text-[10px] font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
            Perguntas Frequentes
          </div>
          <h2 className="text-[2.2rem] md:text-5xl font-bold text-white mb-4 leading-tight">
            Suas dúvidas <span className="gold-text">têm resposta.</span>
          </h2>
        </div>

        <div className="divide-y divide-white/5">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                className="w-full flex justify-between items-center gap-4 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-bold text-base md:text-lg transition-colors ${open === i ? 'text-amber-500' : 'text-white group-hover:text-amber-500'}`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4 pr-8 font-light">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
