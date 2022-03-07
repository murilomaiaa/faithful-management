import Joi from 'joi';

type Helpers = {
  message: (message: any) => any;
};

const validator = (date: string, helpers: Helpers): string | Record<string, unknown> => {
  let result: string | Record<string, unknown> = date;

  const b = date.split('-');
  if (b.length !== 3) {
    result = helpers.message('date must be YYYY-MM-dd');
  }
  const [year, month, day] = b;
  if (Number.isNaN(Number(year)) || Number.isNaN(Number(month)) || Number.isNaN(Number(day))) {
    result = helpers.message('date must be YYYY-MM-dd');
  }

  if (year.length !== 4) {
    result = helpers.message('date must be YYYY-MM-dd');
  }
  if (Number(month) < 1 || Number(month) > 12) {
    result = helpers.message('date must be YYYY-MM-dd');
  }
  if (Number(day) < 1 || Number(day) > 31) {
    result = helpers.message('date must be YYYY-MM-dd');
  }

  return result;
};

export const date = Joi.string().length(10).custom(validator);
