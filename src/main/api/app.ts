import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import routes from '@/infra/http/routes';

import swaggerFile from '@/infra/http/swagger.json';
import { errorHandler } from '@/infra/http/middlewares';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
// app.use(rateLimiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use(errorHandler);

export { app };
