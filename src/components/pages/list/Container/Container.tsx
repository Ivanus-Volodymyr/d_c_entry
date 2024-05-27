import React from 'react';

import { useAppSelector } from '../../../../hooks/selectors';
import Discount from '../Discount/Discount';

const Container = () => {
  const { discounts } = useAppSelector(state => state.discount);
  return (
    <div className="flex flex-col justify-center gap-2">
      {discounts.length === 0 && <h1 className="font-extrabold text-3xl text-teal-500">The are no discounts</h1>}
      {discounts.length > 0 && discounts.map(value => <Discount key={value.id} discount={value} />)}
    </div>
  );
};

export { Container };
