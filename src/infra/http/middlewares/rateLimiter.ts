import { NextFunction, Request, Response } from 'express';
import Redis from 'ioredis';
import { RateLimiterRedis } from 'rate-limiter-flexible';

import cache from '@/main/config/cache';
import AppError from '@/main/errors/AppError';

const redisClient = new Redis({
  enableOfflineQueue: false,
  host: cache.config.redis.host,
  port: cache.config.redis.port ? Number(cache.config.redis.port) : undefined,
  password: cache.config.redis.password || undefined,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimit',
  points: 10, // number of requests per second
  duration: 1,
  blockDuration: 5,
});

export async function rateLimiter(request: Request, _: Response, next: NextFunction): Promise<void> {
  try {
    await limiter.consume(request.ip);

    return next();
  } catch (error: any) {
    throw new AppError('Too many requests', 429);
  }
}
