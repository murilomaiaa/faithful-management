import Joi from 'joi';
import { IValidator } from '@/application/Validator';
import { address, birthday, date, phone } from './helpers';

export class FaithfulControllerValidator implements IValidator {
  private validation: Joi.Schema;

  constructor() {
    this.validation = Joi.object({
      fullName: Joi.string().min(3).required(),
      birthday: birthday.required(),
      maritalStatus: Joi.string().required(),
      phone: phone.required(),
      converted: Joi.object({
        atDay: date.required(),
        church: Joi.string().required(),
      }),
      baptism: Joi.object({
        atDay: date.required(),
        church: Joi.string().required(),
      }),
      address: address.required(),
    });
  }

  async validate(object: unknown): Promise<void> {
    await this.validation.validateAsync(object);
  }
}
