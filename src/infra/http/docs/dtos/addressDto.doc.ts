export const address = {
  dto: {
    type: 'object',
    required: true,
    properties: {
      zipcode: { type: 'string', required: true },
      state: { type: 'string', required: true },
      city: { type: 'string', required: true },
      neighborhood: { type: 'string', required: true },
      street: { type: 'string', required: true },
      number: { type: 'string', required: true },
      complementary: { type: 'string', required: false },
    },
  },
  example: {
    state: 'MG',
    city: 'Coronel Fabriciano',
    neighborhood: 'Centro',
    street: 'Avenida principal',
    number: '123',
    zipcode: '35171323',
  },
};
