import { Faithful } from '@/domain/entities';
import { IFaithfulRepository } from '@/domain/repositories/IFaithfulRepository';
import { CreateFaithfulDTO, CreateFaithfulService } from '@/domain/services/faithful/CreateFaithfulService';
import { Mocked } from '@/tests/helpers/Mocked';
import { makeFakeAddress } from '@/tests/helpers/mocks/address';

jest.mock('crypto', () => ({
  randomUUID: jest.fn().mockReturnValue('b7797813-2178-4833-9dca-4861a9c45577'),
}));

describe('CreateFaithfulService', () => {
  let systemUnderTests: CreateFaithfulService;
  let faithfulRepository: Mocked<IFaithfulRepository>;
  let args: CreateFaithfulDTO.Input;

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2022-02-01').setUTCHours(12, 0, 0, 0));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    args = {
      address: makeFakeAddress(),
      birthday: '2003-01-23',
      fullName: 'any-name',
      maritalStatus: 'any-status',
      phone: '31990609658',
    };
    faithfulRepository = { create: jest.fn() };
    systemUnderTests = new CreateFaithfulService(faithfulRepository);
  });

  it('should save faithful', async () => {
    await systemUnderTests.execute(args);

    expect(faithfulRepository.create).toBeCalledTimes(1);
    expect(faithfulRepository.create).toBeCalledWith(new Faithful(args));
  });
});
