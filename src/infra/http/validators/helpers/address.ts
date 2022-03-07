import Joi from 'joi';

const validStates = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
] as const;

export const address = Joi.object({
  country: Joi.string().default('br'),
  state: Joi.string()
    .valid(...validStates)
    .required(),
  city: Joi.string().required(),
  neighborhood: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  zipcode: Joi.string().length(8).required(),
  complementary: Joi.string().allow('', null),
});
