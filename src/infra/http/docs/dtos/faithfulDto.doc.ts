import { address } from './addressDto.doc';

export const faithful = {
  schema: {
    type: 'object',
    properties: {
      fullName: {
        type: 'string',
        required: true,
      },
      birthday: {
        type: 'string',
        required: true,
      },
      maritalStatus: {
        type: 'string',
        required: true,
      },
      phone: {
        type: 'string',
        required: true,
      },
      converted: {
        type: 'object',
        required: false,
        properties: {
          atDay: {
            type: 'string',
            required: true,
          },
          church: {
            type: 'string',
            required: true,
          },
        },
      },
      baptism: {
        type: 'object',
        required: false,
        properties: {
          atDay: {
            type: 'string',
            required: true,
          },
          church: {
            type: 'string',
            required: true,
          },
        },
      },
      address: address.dto,
    },
  },
  example: {
    fullName: 'John Doe',
    birthday: '2003-01-23',
    maritalStatus: 'single',
    phone: '31990609658',
    converted: {
      atDay: '2020-01-01',
      church: 'Church',
    },
    baptism: {
      atDay: '2021-01-01',
      church: 'Church',
    },
    address: address.example,
  },
};
