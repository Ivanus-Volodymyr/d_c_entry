import React from 'react';

import useGenerateDiscountCode from '../../../../hooks/generator';
import { Button } from '../../../UI';
import { Tablet } from '../../discount';
import Code from '../Code/Code';

const Container = () => {
  const { discountCode, generateCode, clear } = useGenerateDiscountCode();

  return (
    <div className="flex flex-col justify-center">
      <Tablet styles="border-4 border-teal-100 p-20 flex flex-col items-center justify-center gap-8">
        <Code value={discountCode} />
        <Button onClick={discountCode ? clear : generateCode}>{discountCode ? 'Clear' : 'Generate code'}</Button>
      </Tablet>
    </div>
  );
};

export { Container };
