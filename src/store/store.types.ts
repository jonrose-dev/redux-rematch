import { RematchRootState } from "@rematch/core";
import { models } from "./models";


export type RootState = RematchRootState<typeof models>;