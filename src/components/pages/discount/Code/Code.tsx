import React from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormValues } from '../../../../validators/schema.validator';
import { Input } from '../../../UI';

interface Props {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors;
}

const Code = ({ register, errors }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full p-1 mt-1">
      <label className="mb-2">Put an code:</label>
      <div className="flex justify-start items-start w-full flex-col gap-1">
        <Input
          type="text"
          className="p-2 g-aliceblue border-2 border-teal-500 rounded-md w-full"
          placeholder="Code.."
          {...register('code')}
        />
        {(errors.code as FieldError) && (
          <span className="text-red-500 font-normal">{(errors.code as FieldError)?.message}</span>
        )}
        <span
          className="text-teal-500 font-normal cursor-pointer px-2 font-sm"
          onClick={() => navigate('/generate-code')}
        >
          Or generate new code?
        </span>
      </div>
    </div>
  );
};

export default Code;
