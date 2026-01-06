import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
      <div className="space-y-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
          <span className="text-white">Ela Perdeu 28kg</span>{' '}
          <span className="text-brand-yellow">com um super aplicativo</span>{' '}
          <span className="text-white">totalmente natural e fácil de usar</span>
        </h1>
        
        <h2 className="text-lg md:text-xl font-medium text-gray-200 max-w-4xl mx-auto">
          Emagreça de Uma Vez por Todas e nunca mais volte a Engordar com o nosso programa alimentar especializado, Tudo prático e fácil, separado por calorias e com acesso a um aplicativo completo!
        </h2>

        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-700 my-8">
          <iframe 
            id="panda-cfb0370d-b888-48fe-a921-ed0ebdf3957d" 
            src="https://player-vz-6c237b89-9e9.tv.pandavideo.com.br/embed/?v=cfb0370d-b888-48fe-a921-ed0ebdf3957d" 
            className="absolute top-0 left-0 w-full h-full border-none"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" 
            allowFullScreen={true}
            title="Video de Apresentação"
          ></iframe>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          <Button href="https://pay.kiwify.com.br/IhX5Pmh?afid=oLjhX7j8" className="text-xl py-6 animate-pulse-fast">
            Quero Receber meu Aplicativo!
          </Button>
          
          <div className="text-sm text-gray-400 font-medium">
            Para mulheres que estão <strong className="text-white">prontas para uma mudança real e duradoura</strong> de transformar seu relacionamento com a comida.
          </div>

          <img 
            src="https://metodosecarem20dias.com/wp-content/uploads/2025/05/compra-segura-1.png" 
            alt="Compra Segura" 
            className="mx-auto w-64 md:w-80 opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;