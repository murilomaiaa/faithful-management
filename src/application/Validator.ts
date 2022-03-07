export interface IValidator {
  validate(object: unknown): Promise<void>;
}
