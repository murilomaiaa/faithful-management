import 'dotenv/config';
import { TypeormHelper } from '@/infra/typeorm';
import { app } from './app';
import env from '../config/env';

const PORT = env.apiPort;
TypeormHelper.getInstance()
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(console.log);
