import 'dotenv/config';
import { TypeormHelper } from '@/infra/typeorm';
import { app } from './app';

const PORT = process.env.PORT ?? 3000;
TypeormHelper.getInstance()
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(console.log);
