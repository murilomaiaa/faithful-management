import { TypeormHelper } from '@/infra/typeorm';
import { app } from './app';

// TypeormHelper.getInstance()
// .connect()
// .then(() => {
app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3333');
});
// })
// .catch(console.log);
