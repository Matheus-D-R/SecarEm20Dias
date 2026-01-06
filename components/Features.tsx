import React from 'react';
import { Utensils, Heart, Smile } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="w-12 h-12 text-brand-green" />,
      title: "Emagrecer Comendo",
      description: "Seguindo o nosso plano alimentar, você vai perceber que poderá perder peso comendo de forma gostosa e saudável, sem ter que largar o seu pão francês ou seus alimentos prediletos."
    },
    {
      icon: <Heart className="w-12 h-12 text-brand-green" />,
      title: "Mudança de Corpo",
      description: "Nosso programa além de potencializar o seu emagrecimento, você vera diferença corporal e redução das suas medidas."
    },
    {
      icon: <Smile className="w-12 h-12 text-brand-green" />,
      title: "Autoestima Renovada",
      description: "Comece a ver resultados logo nas primeiras semanas, sinta a felicidade de ver a transformação do seu corpo e da sua saúde."
    }
  ];

  return (
    <section className="w-full py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-0 h-0 border-l-[350px] border-l-transparent border-r-[350px] border-r-transparent border-t-[10px] border-t-brand-green mx-auto mb-8 hidden md:block opacity-20"></div>
        <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
          Em apenas 20 dias você vai mudar<br />
          <span className="text-brand-yellow">Sua vida para sempre!</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-6 bg-brand-card rounded-xl border border-gray-800 hover:border-brand-green/50 transition-all duration-300">
            <div className="mb-4 p-4 bg-brand-dark rounded-full shadow-inner border border-gray-800">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;