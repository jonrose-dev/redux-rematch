import { init } from '@rematch/core'
import { models } from './models/models'

export const store = init({
  models,
})

export const { dispatch } = store;
export type Dispatcher = typeof dispatch;