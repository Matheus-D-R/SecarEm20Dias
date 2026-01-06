import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-black py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h4 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-brand-green pl-4">
            Resultados Garantidos ou seu dinheiro de volta!
          </h4>
          <div className="text-gray-300 space-y-4 text-lg">
            <p>
              Compre o <strong className="text-white">Método Secar em 20 Dias</strong> hoje e tenha uma garantia incondicional de 7 dias.
            </p>
            <p>
              Se você não gostar ou não se adaptar ao nosso método, basta enviar um e-mail para: 
              <span className="block text-brand-green font-mono mt-1">suportecliente@monevo.com.br</span>
            </p>
            <p>
              Se sua mensagem for enviada dentro do prazo de 7 dias, iremos cancelar sua compra imediatamente e devolveremos todo o seu dinheiro.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="https://metodosecarem20dias.com/wp-content/uploads/2024/02/7-dias-de-garantia-degrade-1024x980.png" 
            alt="Selo de Garantia de 7 Dias" 
            className="w-64 md:w-80 drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;