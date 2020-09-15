import { ExtractRematchStateFromModels, init, RematchRootState } from '@rematch/core'
import loadingPlugin from '@rematch/loading'
import { models } from './models'

interface LoadingPlugin {
  loading: {
    models: RematchRootState<typeof models>;
    effects: RematchRootState<typeof models>;
  }
}

export const store = init({
  models,
  plugins: [loadingPlugin()],
})

export const { dispatch } = store;
export type ILoadingState = Partial<ExtractRematchStateFromModels<typeof models> & LoadingPlugin>;
export type Dispatcher = typeof dispatch & LoadingPlugin;