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

        {/* Narrative Text Replacement for Video */}
        <div className="w-full max-w-3xl mx-auto my-8 md:my-12 text-left md:text-center space-y-8 bg-white/5 p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm hover:border-brand-green/30 transition-colors duration-500">
            <div className="space-y-2 text-gray-300 text-lg md:text-xl leading-relaxed">
                <p>Você acorda prometendo que <span className="text-white italic">“agora vai”</span>.</p>
                <p>Passa o dia se controlando.</p>
                <p>À noite, o cansaço vence… <span className="text-red-400 font-medium">e a culpa vem logo depois.</span></p>
            </div>

            <div className="space-y-2 text-gray-300 text-lg md:text-xl leading-relaxed">
                <p>Cada tentativa frustrada faz você se sentir pior.</p>
                <p>Como se o problema fosse você.</p>
                <p>Como se seu corpo estivesse <span className="text-white italic">“quebrado”</span>.</p>
            </div>

            <div className="pt-4 space-y-3 bg-black/20 p-4 rounded-xl border border-white/5">
                <p className="text-xl md:text-2xl font-bold text-brand-green">
                    👉 Mas a verdade é simples e ninguém te conta:
                </p>
                <p className="text-white text-lg md:text-xl font-medium">
                    Emagrecer não é sofrer, passar fome ou viver de dieta restritiva.<br className="hidden md:block" />
                    É entender como usar a alimentação certa, do jeito certo, sem radicalismo.
                </p>
            </div>

            <p className="text-brand-yellow font-black text-xl md:text-2xl uppercase tracking-wide pt-2">
                E é exatamente isso que você vai descobrir agora.
            </p>
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