import { Faithful } from '@/domain/entities';
import { AddressDTO } from '@/domain/entities/valueObjects';
import { IFaithfulRepository } from '@/domain/repositories/IFaithfulRepository';
import { randomUUID } from 'crypto';

export namespace CreateFaithfulDTO {
  export type Input = {
    fullName: string;
    birthday: string;
    maritalStatus: string;
    phone: string;
    converted?: {
      atDay: string;
      church: string;
    };
    baptism?: {
      atDay: string;
      church: string;
    };
    // cameIn: string;
    address: AddressDTO;
  };
}

export interface ICreateFaithfulService {
  execute: (data: CreateFaithfulDTO.Input) => Promise<string>;
}

export class CreateFaithfulService implements ICreateFaithfulService {
  constructor(private readonly faithfulRepository: IFaithfulRepository) {}

  async execute(data: CreateFaithfulDTO.Input): Promise<string> {
    const faithful = new Faithful(data);

    await this.faithfulRepository.create(faithful);

    return randomUUID();
  }
}
