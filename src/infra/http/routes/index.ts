import { makeFaithfulController } from '@/main/factories/controller/FaithfulController';
import { Router } from 'express';

const routes = Router();

const controller = makeFaithfulController();
routes.post(controller.path, async (req, res) => {
  const { body, status } = await controller.create(req);
  return res.status(status).json(body);
});

export default routes;
