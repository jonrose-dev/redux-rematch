import { count } from './count/count.model'

export interface RootModel {
  count: typeof count
}
export const models = { count };
