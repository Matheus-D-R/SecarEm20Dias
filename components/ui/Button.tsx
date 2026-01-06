import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', href, variant = 'primary', ...props }) => {
  const baseStyles = "w-full py-4 px-6 rounded-lg font-bold text-center uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg flex justify-center items-center";
  
  const variants = {
    primary: "bg-[#25D366] hover:bg-[#1ebc57] text-white border-b-4 border-[#128c3d]", // WhatsApp Green style often used in Brazil
    secondary: "bg-brand-yellow text-black border-b-4 border-yellow-600 hover:bg-yellow-300"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;