import Joi from 'joi';

type Helpers = {
  message: (message: any) => any;
};

const validator = (phone: string, helpers: Helpers): string | Record<string, unknown> => {
  let result: string | Record<string, unknown> = phone;

  if (phone.length < 10) result = helpers.message('phone must contain ddd');
  if (phone.length > 11) result = helpers.message('phone max length is 11');

  return result;
};

export const phone = Joi.string().custom(validator);
