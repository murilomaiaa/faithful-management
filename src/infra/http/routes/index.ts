import { makeFaithfulController } from '@/main/factories/controller/FaithfulController';
import { Router } from 'express';

const routes = Router();

routes.post('/', async (req, res) => {
  const controller = makeFaithfulController();
  const { body, status } = await controller.create(req);
  return res.status(status).json(body);
});

export default routes;
