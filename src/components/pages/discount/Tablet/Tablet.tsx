import React from 'react';

interface Props {
  children: React.ReactNode;
  styles?: string;
}

const Tablet = ({ children, styles }: Props) => {
  return (
    <div className={`${styles ? styles : 'border-4 border-teal-100 p-10 flex flex-col items-end justify-end gap-4'}`}>
      {children}
    </div>
  );
};

export { Tablet };
