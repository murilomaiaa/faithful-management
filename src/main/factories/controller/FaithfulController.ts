import { FaithfulController } from '@/application/controllers/FaithfulController';
import { FaithfulControllerValidator } from '@/infra/http/validators/FaithfulControllerValidator';

export const makeFaithfulController = (): FaithfulController => {
  const validator = new FaithfulControllerValidator();
  return new FaithfulController(validator);
};
