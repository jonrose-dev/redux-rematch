import { ExtractRematchDispatchersFromEffects, RematchRootState } from "@rematch/core";
import { RootModel } from "./models";



type ExtractRematchDispatchersFromEffectsLoading<modelKey extends keyof RootModel> = {
  [key in keyof ExtractRematchDispatchersFromEffects<RootModel[modelKey]['effects'], RootModel>]: boolean;
}

export interface LoadingPlugin {
  loading: {
    models: { [modelKey in keyof RootModel]: boolean };
    effects: { [modelKey in keyof RootModel]: ExtractRematchDispatchersFromEffectsLoading<modelKey> }
  }
}

export type RootState = RematchRootState<RootModel> & LoadingPlugin;
