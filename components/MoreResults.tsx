import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const resultImages = [
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/1-1.png",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/2-1.png",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/5-1.png",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/6-1.png",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/3-2.png",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/4.png"
];

const MoreResults: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        const maxScrollLeft = current.scrollWidth - current.clientWidth;
        
        if (current.scrollLeft >= maxScrollLeft - 10) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Tudo é possível quando você se esforça!<br />
          <span className="text-brand-green">Você será a próxima a ter esses Resultados</span>
        </h2>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors hidden md:block backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 py-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {resultImages.map((src, index) => (
              <div key={index} className="flex-none w-72 md:w-80 snap-center">
                <img 
                  src={src} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-auto rounded-xl shadow-lg border border-gray-800"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors hidden md:block backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        <div className="max-w-md mx-auto space-y-4 pt-4">
            <Button href="https://pay.kiwify.com.br/IhX5Pmh?afid=oLjhX7j8" className="text-xl py-5 shadow-brand-green/20">
                SIM, EU QUERO EMAGRECER E PERDER GORDURA LOCALIZADA!
            </Button>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Pagamento único, sem nenhuma cobrança extra ou mensalidades.</p>
            <img 
                src="https://metodosecarem20dias.com/wp-content/uploads/2025/05/Group-2073.svg" 
                alt="Formas de Pagamento" 
                className="mx-auto h-6 opacity-60"
            />
        </div>
      </div>
    </section>
  );
};

export default MoreResults;