import { RematchRootState } from "@rematch/core";
import { models } from "./models/models";


export type RootState = RematchRootState<typeof models>;