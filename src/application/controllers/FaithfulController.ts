import { HttpRequest, HttpResponse } from '../http';
import { IValidator } from '../Validator';

type AddressDTO = {
  zipcode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complementary?: string;
};

type FaithfulRequest = {
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

export class FaithfulController {
  constructor(private readonly validator: IValidator) {}
  async create(request: HttpRequest<FaithfulRequest>): Promise<HttpResponse> {
    await this.validator.validate(request.body);

    return {
      body: request.body,
      status: 200,
    };
  }
}
