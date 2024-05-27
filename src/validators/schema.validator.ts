import Joi from 'joi';

type FormValues = {
  option: string;
  code: string;
  note: string;
};

const schema = Joi.object({
  option: Joi.string().valid('Option A', 'Option B', 'Option C').required().messages({
    'string.empty': 'Option is required',
    'any.only': 'Option must be one of: Option A, Option B, Option C',
  }),
  code: Joi.string()
    .required()
    .pattern(/^DISCOUNT2024-\d{13}$/)
    .messages({
      'string.empty': 'Discount code is required',
      'string.pattern.base': 'Discount code must be as patern ^DISCOUNT2024-date',
    }),
  note: Joi.string().required().min(2).max(30).messages({
    'string.empty': 'Note is required',
    'string.min': 'Note should be at least 2 characters long',
    'string.max': 'Note should not exceed 30 characters',
  }),
});

export { schema };
export type { FormValues };
