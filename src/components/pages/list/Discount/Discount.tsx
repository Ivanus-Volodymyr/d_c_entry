import React from 'react';

import { IDiscount } from '../../../../interfaces/discount.interface';

interface Props {
  discount: IDiscount;
}

const Discount = ({ discount }: Props) => {
  return (
    <div className="flex flex-col gap-2 min-w-96 border-2 border-teal-100 p-10">
      <div className="text-teal-500 font-normal">ID : {discount.id}</div>
      <div className="text-teal-500">OPTION : {discount.option}</div>
      <div className="text-teal-500">CODE : {discount.code}</div>
      <div className="text-teal-500">NOTE : {discount.note}</div>
    </div>
  );
};

export default Discount;
