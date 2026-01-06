import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 mb-4">
      <button
        className="w-full py-4 px-2 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-green" /> : <ChevronDown className="w-5 h-5 text-brand-green" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 text-gray-300 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;