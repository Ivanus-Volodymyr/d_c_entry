import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className="px-2.5 py-1 text-teal-500 bg-transparent border border-teal-500 cursor-pointer">
      {children}
    </button>
  );
};

export { Button };
