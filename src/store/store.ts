import { init } from '@rematch/core'
import loadingPlugin from '@rematch/loading'
import { models, RootModel } from './models'


export const store = init({
  models,
  plugins: [loadingPlugin<RootModel>()],
})

export const { dispatch } = store;