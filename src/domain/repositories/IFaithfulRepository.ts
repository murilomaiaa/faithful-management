import { Faithful } from '../entities';

export interface IFaithfulRepository {
  create(faithful: Faithful): Promise<Faithful>;
}
