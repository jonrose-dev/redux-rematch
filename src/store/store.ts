import { init } from '@rematch/core';
import loadingPlugin from '@rematch/loading';
import updatedPlugin from '@rematch/updated';
import { models, RootModel } from './models';


export const store = init({
  models,
  plugins: [
    loadingPlugin<RootModel>(),
    updatedPlugin<RootModel>(),
  ],
})

export const { dispatch } = store;