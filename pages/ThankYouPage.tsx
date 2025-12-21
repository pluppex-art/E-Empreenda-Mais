
import React from 'react';
import Logo from '../components/Logo';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010814] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full animate-in fade-in zoom-in duration-500">
        <Logo className="h-24 md:h-32 mx-auto mb-8" />
        
        <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Barra de Progresso 95% */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-2">
              <span className="text-amber-500/80 text-[10px] font-black uppercase tracking-widest">Quase lá...</span>
              <span className="text-amber-500 font-black text-xs">95%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full gold-gradient rounded-full shadow-[0_0_10px_rgba(191,149,63,0.5)] animate-pulse" 
                style={{ width: '95%' }}
              ></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
            Seu acesso está <br /> <span className="gold-text">confirmado!</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed font-light">
            Agora, o passo mais importante: clique no botão abaixo para entrar no <strong>Grupo Exclusivo da 3ª Turma</strong>.
          </p>
          
          <a 
            href="https://chat.whatsapp.com/CkeMu4rXwRl126XfSAMs9t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-full gold-gradient text-gray-950 px-4 py-5 md:py-6 rounded-2xl shadow-[0_20px_50px_rgba(191,149,63,0.3)] group-hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 relative overflow-hidden">
              {/* Brilho reflexivo animado no botão */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
              
              <svg className="w-6 h-6 md:w-8 md:h-8 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.412 0 6.556-5.332 11.891-11.891 11.891-2.015 0-3.991-.511-5.741-1.478l-6.252 1.687zm6.545-3.647c1.556.924 3.036 1.411 4.739 1.411 5.399 0 9.791-4.393 9.791-9.792 0-2.618-1.019-5.079-2.87-6.931-1.85-1.851-4.311-2.871-6.921-2.871-5.398 0-9.791 4.393-9.791 9.792 0 1.838.48 3.632 1.389 5.2l-.936 3.42 3.51-.929zm11.388-7.22c-.062-.102-.228-.163-.48-.288-.251-.125-1.488-.734-1.719-.817-.23-.083-.398-.125-.565.125-.167.25-.648.817-.795.984-.146.167-.293.187-.544.062-.25-.125-1.058-.39-2.015-1.244-.745-.665-1.248-1.485-1.394-1.736-.146-.25-.016-.386.109-.511.112-.112.251-.288.376-.432.125-.145.167-.25.251-.417.083-.167.042-.313-.021-.438-.063-.125-.565-1.354-.774-1.854-.203-.488-.411-.422-.565-.43-.146-.007-.313-.008-.48-.008-.167 0-.439.062-.669.312-.23.25-.878.859-.878 2.094 0 1.234.9 2.427 1.025 2.604.125.177 1.77 2.704 4.288 3.792.599.259 1.066.414 1.43.531.602.191 1.15.164 1.583.1.483-.072 1.488-.609 1.697-1.198.21-.588.21-1.094.147-1.198z"/>
              </svg>
              <span className="font-black text-sm md:text-xl tracking-tight leading-none">
                ENTRAR NO GRUPO VIP AGORA
              </span>
            </div>
          </a>
          
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-xs md:text-sm text-gray-500 italic leading-relaxed">
              Atenção: É através deste grupo que enviaremos o link de inscrição com bônus exclusivos.
            </p>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default ThankYouPage;
