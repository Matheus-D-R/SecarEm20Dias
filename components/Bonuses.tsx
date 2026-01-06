import React from 'react';
import { BonusItem } from '../types';

const bonusData: BonusItem[] = [
  {
    title: "Alongamento e Mobilidade",
    subtitle: "Bônus",
    description: "Receba uma esteira de exercícios para alongamento e mobilidade corporal, todos em vídeo aulas completos e Personalizados dentro do nosso aplicativo.",
    imageSrc: "https://metodosecarem20dias.com/wp-content/uploads/2025/03/Alongamento-e-Mobilidade-2-1.png"
  },
  {
    title: "250 Receitas Low Carb",
    subtitle: "Bônus",
    description: "250 receitas low carb para uma jornada deliciosa e saudável. De pratos principais a sobremesas, descubra opções saborosas que se alinham ao estilo de vida de baixo carboidrato.",
    imageSrc: "https://metodosecarem20dias.com/wp-content/uploads/2025/03/Alongamento-e-Mobilidade-3-1-1024x726.png"
  },
  {
    title: "Treinos em Casa",
    subtitle: "Bônus",
    description: "Desperte sua energia com nosso circuito de exercícios para casa, perfeito para quem busca resultados sem academia ou tempo escasso.",
    imageSrc: "https://metodosecarem20dias.com/wp-content/uploads/2025/03/Alongamento-e-Mobilidade-4-1.png"
  },
  {
    title: "Treinos Para Gestantes",
    subtitle: "Bônus",
    description: "Você também irá receber um circuito de exercícios para gestantes desde o alongamento e mobilidade inicial a outros treinos mais avançados com auxílio da nossa personal!",
    imageSrc: "https://metodosecarem20dias.com/wp-content/uploads/2025/05/Seu-Nome-2-1.png"
  }
];

const Bonuses: React.FC = () => {
  return (
    <section className="w-full bg-brand-dark py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          <strong className="text-brand-green">Dê uma olhada agora:</strong> nos BÔNUS que você vai ter acesso nesse curso completo
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {bonusData.map((bonus, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/3">
                <img 
                  src={bonus.imageSrc} 
                  alt={bonus.title} 
                  className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">
                  {bonus.title} <span className="text-brand-green">– {bonus.subtitle}</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;