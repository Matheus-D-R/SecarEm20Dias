import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const carouselImages = [
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-02-15-at-13.35.48-1-683x1024.webp",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-02-15-at-13.35.48-2-1-1-695x1024.webp",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-02-15-at-13.35.46.webp",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-02-15-at-13.35.47.webp",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-02-15-at-13.35.48-652x1024.webp"
];

const RealResults: React.FC = () => {
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
        
        // If we are close to the end, scroll back to start
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
    <section className="w-full bg-brand-card py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        
        {/* Header Text */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-gray-200 uppercase leading-relaxed">
            CONHEÇA MULHERES REAIS QUE TOMARAM UMA ATITUDE E CONQUISTARAM UM CORPO SAUDÁVEL E UMA VIDA MUITO MAIS FELIZ.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group max-w-5xl mx-auto">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors hidden md:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 py-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselImages.map((src, index) => (
              <div key={index} className="flex-none w-64 md:w-72 snap-center">
                <img 
                  src={src} 
                  alt={`Resultado WhatsApp ${index + 1}`} 
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors hidden md:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Static Before/After Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <img 
            src="https://metodosecarem20dias.com/wp-content/uploads/2025/03/Antes-1.jpg" 
            alt="Antes e Depois 1" 
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-800"
            loading="lazy"
          />
          <img 
            src="https://metodosecarem20dias.com/wp-content/uploads/2025/03/Antes-2.jpg" 
            alt="Antes e Depois 2" 
            className="w-full h-auto rounded-xl shadow-2xl border border-gray-800"
            loading="lazy"
          />
        </div>

        {/* CTA Section */}
        <div className="max-w-lg mx-auto space-y-6 pt-8">
          <Button href="https://pay.kiwify.com.br/IhX5Pmh?afid=oLjhX7j8" className="text-lg md:text-xl py-6 shadow-brand-green/20">
            SIM, EU QUERO EMAGRECER E PERDER GORDURA LOCALIZADA!
          </Button>
          
          <img 
            src="https://metodosecarem20dias.com/wp-content/uploads/2025/05/compra-segura-1.png" 
            alt="Compra Segura" 
            className="mx-auto w-64 opacity-80"
          />
        </div>

      </div>
    </section>
  );
};

export default RealResults;