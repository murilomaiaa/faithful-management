import { AddressDTO } from '@/domain/entities/valueObjects';
import { HttpRequest, HttpResponse } from '../http';
import { IValidator } from '../Validator';
import { IController } from './IController';

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

export class FaithfulController implements IController {
  public path: string;
  constructor(private readonly validator: IValidator, private readonly createFaithful: ICreateFaithfulService) {
    this.path = '/faithful';
  }

  async create(request: HttpRequest<FaithfulRequest>): Promise<HttpResponse> {
    await this.validator.validate(request.body);

    const id = await this.createFaithful.execute(request.body);

    return {
      body: { id },
      status: 201,
    };
  }
}
