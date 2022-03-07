import env from '@/main/config/env';
import { faithfulRoute } from './routes/faithful.doc';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Faithful management',
    description: "Faithful management's endpoints",
    version: '1.0.0',
  },
  servers: [
    {
      url: `http://localhost:${env.apiPort}`,
      description: 'Server running local',
    },
  ],
  apis: ['./src/infra/http/docs/**/**.doc.ts'],
  paths: {
    ...faithfulRoute,
  },
};
