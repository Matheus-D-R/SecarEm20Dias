import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://metodosecarem20dias.com/wp-content/uploads/2025/07/1.jpg",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/07/2.jpg",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/07/3.jpg",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/07/4.jpg",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/07/5.jpg",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/07/7.jpg",
  "https://metodosecarem20dias.com/wp-content/uploads/2025/07/8.jpg"
];

const Testimonials: React.FC = () => {
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
    }, 4000); // Slightly slower for this carousel

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="w-full bg-brand-card py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Confira resultados reais de nossas clientes!</h2>
        <h3 className="text-xl md:text-2xl text-brand-green mb-8">Resultados transformadores logo nas primeiras semanas</h3>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full hover:bg-black/80 transition-colors border border-white/10 backdrop-blur-sm shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 py-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((src, index) => (
              <div key={index} className="flex-none w-72 md:w-80 snap-center">
                <img 
                  src={src} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-auto rounded-lg shadow-lg border-2 border-brand-green/20"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 p-3 rounded-full hover:bg-black/80 transition-colors border border-white/10 backdrop-blur-sm shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;