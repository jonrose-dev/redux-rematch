import { Models, RematchDispatch } from '@rematch/core'

import { count } from './count/count.model';
import { person } from './person/person.model';

export type Dispatcher = RematchDispatch<RootModel>;

export interface RootModel extends Models<RootModel> {
  count: typeof count;
  person: typeof person;
}

export const models: RootModel = { count, person };

