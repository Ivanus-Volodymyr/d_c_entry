import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { options } from '../../../../constants/options';
import { FormValues } from '../../../../validators/schema.validator';
import { Input } from '../../../UI';

interface Props {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const Options: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className="flex flex-col w-full p-1 gap-1">
      <label className="mb-2">Select an option:</label>
      <div className="flex justify-between w-full">
        {options.map((option, i) => (
          <div key={i} className="flex gap-1 w-1/3 m-8">
            <Input type="radio" value={option.value} {...register('option')} className="cursor-pointer" />
            <label className="font-normal text-xs align-middle w-14">{option.label}</label>
          </div>
        ))}
      </div>
      {errors.option && <span className="text-red-500 font-normal ">{errors.option.message}</span>}
    </div>
  );
};

export { Options };
