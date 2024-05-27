import React from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormValues } from '../../../../validators/schema.validator';

interface Props {
  label: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors;
}

const Note = ({ label, register, errors, ...props }: Props) => {
  return (
    <div className="flex flex-col w-full p-1 mt-4 gap-1">
      <label className="mb-2">{label}</label>
      <textarea
        {...props}
        {...register('note')}
        className="p-2 g-aliceblue border-2 border-teal-500 rounded-md w-full h-44"
      />
      {errors.note && <span className="text-red-500 font-normal">{(errors.note as FieldError)?.message}</span>}
    </div>
  );
};

export { Note };
