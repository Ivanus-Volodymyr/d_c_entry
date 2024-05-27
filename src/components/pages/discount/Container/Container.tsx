import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch } from '../../../../hooks/selectors';
import { setNewDiscount } from '../../../../store/slices/discountSlice';
import { FormValues, schema } from '../../../../validators/schema.validator';
import { Button, Form } from '../../../UI';
import Code from '../Code/Code';
import { Note } from '../Note/Note';
import { Options } from '../Options/Options';
import { Tablet } from '../Tablet/Tablet';

import 'react-toastify/dist/ReactToastify.css';

const Container = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: joiResolver(schema) });

  const dispatch = useAppDispatch();

  const submit = (data: FormValues) => {
    dispatch(setNewDiscount(data));
    reset();
    toast('Successfully added');
  };

  return (
    <div className="flex flex-col justify-end gap-2">
      <Tablet>
        <Form onSubmit={handleSubmit(submit)}>
          <Options register={register} errors={errors} />
          <Code register={register} errors={errors} />
          <Note label="Provide the Note" register={register} errors={errors} />
          <Button type="submit">Submit</Button>
        </Form>
      </Tablet>
    </div>
  );
};

export { Container };
