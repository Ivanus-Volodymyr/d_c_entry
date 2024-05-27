import React, { FormHTMLAttributes, ReactNode } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className="flex flex-col items-end justify-end gap-4" {...props}>
      {children}
    </form>
  );
};

export { Form };
