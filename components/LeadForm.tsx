
import React, { useState } from 'react';

interface LeadFormProps {
  onSubmit: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbQfQuTj5eL8BBExcPtFfFKbM7kQrf4LP_Nus7TRTQ487eZtNpV09jY2OVXya2ozBWPQ/exec';

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) return numbers;
    return numbers.slice(0, 11);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica de WhatsApp (DDD + 8 ou 9 dígitos)
    if (formData.whatsapp.length < 10) {
      setError('Por favor, insira o WhatsApp com DDD corretamente.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      params.append('Nome', formData.name);
      params.append('WhatsApp', formData.whatsapp);
      params.append('Email', formData.email);
      params.append('Data', new Date().toLocaleString('pt-BR'));
      params.append('Status', 'Lead'); 

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      setTimeout(() => {
        setLoading(false);
        onSubmit(); 
      }, 1500);

    } catch (err) {
      console.error('Erro de rede:', err);
      setError('Ocorreu um problema técnico. Tente novamente.');
      setLoading(false);
    }
  };

  const inputStyles = "w-full bg-[#020b1a] border-2 border-gray-800 rounded-2xl px-5 py-5 text-white focus:outline-none focus:border-amber-500 transition-all text-base md:text-lg placeholder-gray-500 appearance-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl text-xs md:text-sm text-center font-bold animate-bounce">
          {error}
        </div>
      )}
      
      <div className="relative">
        <input
          required
          type="text"
          placeholder="Seu Nome Completo"
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          className={inputStyles}
        />
      </div>

      <div className="relative">
        <input
          required
          type="tel"
          placeholder="WhatsApp (ex: 11999999999)"
          value={formData.whatsapp}
          onChange={e => setFormData({...formData, whatsapp: formatWhatsApp(e.target.value)})}
          className={inputStyles}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-600 font-bold uppercase tracking-widest hidden md:block">DDD + Número</span>
      </div>

      <div className="relative">
        <input
          required
          type="email"
          placeholder="Seu Melhor E-mail"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          className={inputStyles}
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="w-full gold-gradient text-gray-950 font-black text-lg md:text-xl py-5 rounded-2xl shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-6 disabled:opacity-50 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        {loading ? (
          <>
            <div className="w-6 h-6 border-[3px] border-gray-950/30 border-t-gray-950 rounded-full animate-spin"></div>
            <span>PROCESSANDO...</span>
          </>
        ) : (
          <span className="relative z-10">QUERO ENTRAR NO GRUPO VIP</span>
        )}
      </button>
      
      <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
        <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold">
          Respeitamos sua privacidade
        </p>
      </div>
    </form>
  );
};

export default LeadForm;
