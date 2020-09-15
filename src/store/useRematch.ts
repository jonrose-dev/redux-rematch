import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { ILoadingState, RootState } from './store.types';

export const useRematch: TypedUseSelectorHook<RootState & ILoadingState> = useSelector;

