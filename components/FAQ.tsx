import React from 'react';
import AccordionItem from './ui/Accordion';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Como eu vou receber esse guia?",
    answer: "O acesso ao produto é de imediato para pagamentos por Cartão ou Pix. Você vai receber o acesso ao programa pelo seu e-mail. Caso não consiga acessar pelo e-mail, nos envie uma mensagem que entraremos em contato com você."
  },
  {
    question: "Esse programa é um Aplicativo?",
    answer: "Isso mesmo, ele é um aplicativo onde você consegue instalar no seu celular, para iPhone ou Android, muito fácil e prático onde você irá conseguir acessar todos os conteúdos e bônus com facilidade!"
  },
  {
    question: "Os Alimentos são Caros?",
    answer: "Nossas receitas são muito fáceis e práticas, e você pode estar fazendo com ingredientes que você tem na sua casa."
  },
  {
    question: "Tenho que pagar todo mês?",
    answer: "Não, seu pagamento é somente uma vez e o aplicativo e todas as suas atualizações são seus para sempre!"
  },
  {
    question: "Existe alguma garantia que o programa funciona?",
    answer: "Nós confiamos tanto em nossos estudos e pesquisas que lhe garantimos 7 dias de garantia incondicional!"
  },
  {
    question: "Em quanto tempo vou ter resultados?",
    answer: "Em alguns dias depois de começar. Quanto mais você fizer disso parte de sua rotina diária, mais rápido você vai obter os resultados que deseja."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="w-full bg-brand-card py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Perguntas Frequentes</h2>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem key={index} title={item.question} content={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;