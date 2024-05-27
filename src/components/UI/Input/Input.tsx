import React, { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className="px-3.5 py-2 text-sm text-[#082525] bg-transparent border border-[#308686] cursor-pointer w-full sm:w-50 font-sana-serif"
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
