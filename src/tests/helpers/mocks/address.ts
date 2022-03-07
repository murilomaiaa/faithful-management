import { AddressDTO } from '@/domain/entities';

export const makeFakeAddress = (): AddressDTO => ({
  city: 'Coronel Fabriciano',
  neighborhood: 'any-neighborhood',
  number: 'any-number',
  state: 'MG',
  street: 'any-street',
  zipcode: '78456123',
  complementary: 'any-complementary',
});
