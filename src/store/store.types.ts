import { ExtractRematchStateFromModels, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";

export interface LoadingPlugin {
  loading: {
    models: RematchRootState<typeof models>;
    effects: RematchRootState<typeof models>;
  }
}
export type ILoadingState = ExtractRematchStateFromModels<typeof models> & LoadingPlugin;
export type RootState = RematchRootState<RootModel>;