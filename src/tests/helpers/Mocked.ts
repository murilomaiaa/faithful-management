/**
 * Mocked component
 *
 * @example
 * const repository = {
 *   getById: jest.fn().mockResolvedValue({ any: 'object' })
 *   create: jest.fn()
 * }
 */
export type Mocked<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer B ? jest.Mock<B, A> : T[K];
};
