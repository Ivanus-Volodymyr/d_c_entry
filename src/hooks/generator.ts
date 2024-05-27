import { useState } from 'react';

const useGenerateDiscountCode = () => {
  const [discountCode, setDiscountCode] = useState<string>('');

  const generateCode = () => {
    const code = 'DISCOUNT2024';
    setDiscountCode(code);
  };

  const clear = () => {
    setDiscountCode('');
  };

  return {
    discountCode,
    generateCode,
    clear,
  };
};

export default useGenerateDiscountCode;
