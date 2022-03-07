import { FaithfulController } from '@/application/controllers/FaithfulController';
import { CreateFaithfulService } from '@/domain/services/faithful/CreateFaithfulService';
import { FaithfulControllerValidator } from '@/infra/http/validators/FaithfulControllerValidator';

export const makeFaithfulController = (): FaithfulController => {
  const validator = new FaithfulControllerValidator();
  const service = new CreateFaithfulService();
  return new FaithfulController(validator, service);
};
