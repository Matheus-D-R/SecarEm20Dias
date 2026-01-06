import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import { AlertTriangle, Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 19, seconds: 0 });

  useEffect(() => {
    // Basic countdown logic for demo purposes - restarts on refresh usually in these landing pages
    // or persists via local storage. Let's do a simple 19 min countdown.
    const initialTime = 19 * 60; // 19 minutes in seconds
    let timer = initialTime;

    const interval = setInterval(() => {
      timer--;
      if (timer < 0) timer = initialTime;
      
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-4 my-6">
        {[
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds }
        ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg min-w-[90px] border border-gray-700">
                <span className="text-3xl font-mono font-bold text-brand-green">{String(item.value).padStart(2, '0')}</span>
                <span className="text-xs uppercase text-gray-400">{item.label}</span>
            </div>
        ))}
    </div>
  );
}

const Offer: React.FC = () => {
  return (
    <section id="offer" className="w-full bg-gradient-to-b from-brand-card to-brand-dark py-16 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-red-900/30 text-red-500 border border-red-900/50 px-4 py-2 rounded-full animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-bold uppercase text-sm">Atenção – Você não verá essa oferta novamente</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Aproveite, pois é somente para as <span className="bg-brand-yellow text-black px-2 transform -skew-x-12 inline-block">10 primeiras</span>
        </h2>

        <div className="bg-black/30 p-6 rounded-2xl border border-gray-800 mt-8">
            <h3 className="text-xl font-semibold text-gray-300 flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                As Vagas do Aplicativo se Encerram em…
            </h3>
            <CountdownTimer />
        </div>

        <div className="space-y-2 py-6">
            <p className="text-gray-400 text-lg">Promoção limitada de <span className="line-through text-red-500">R$ 197,00</span> por</p>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                <span className="text-2xl align-top text-gray-500 font-medium mr-1">Apenas</span>
                6X de R$ 5,24
            </div>
            <p className="text-xl text-brand-green font-bold">ou R$ 27,90 à vista</p>
        </div>

        <div className="max-w-md mx-auto">
            <Button href="https://pay.kiwify.com.br/IhX5Pmh?afid=oLjhX7j8" className="text-xl py-6 shadow-brand-green/20">
                QUERO RECEBER MEU APLICATIVO!
            </Button>
            <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Pagamento único • Acesso vitalício</p>
            
            <img 
                src="https://metodosecarem20dias.com/wp-content/uploads/2025/05/Group-2073.svg" 
                alt="Formas de Pagamento" 
                className="mx-auto mt-6 h-6 opacity-60"
            />
        </div>

      </div>
    </section>
  );
};

export default Offer;