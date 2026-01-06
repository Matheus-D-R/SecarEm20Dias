import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-12 px-4 border-t border-gray-900">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div className="text-gray-500 text-sm leading-relaxed space-y-4">
          <p>
            <strong>AVISO LEGAL:</strong> O conteúdo deste site é apenas para fins informativos e não pretende ser um substituto para aconselhamento médico profissional, diagnóstico ou tratamento. Sempre procure o conselho de seu médico ou outro profissional de saúde qualificado sobre uma condição médica, suspeita de condição médica e antes de iniciar qualquer dieta, exercício ou programa de suplementação.
          </p>
          <p>
            Aviso: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
        
        <div className="pt-8 border-t border-gray-900">
          <p className="text-gray-600 text-sm">
            ® 2025 Método Secar em 20 Dias | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;