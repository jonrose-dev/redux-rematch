import { count } from './count/count.model';
import { person } from './person/person.model';

export interface RootModel {
  count: typeof count;
  person: typeof person;
}
export const models = { count, person };
