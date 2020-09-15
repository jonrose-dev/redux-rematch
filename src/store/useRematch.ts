import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ILoadingState } from './store';

import { RootState } from './store.types';

export const useRematch: TypedUseSelectorHook<RootState> = useSelector;

export const useRematchLoading: TypedUseSelectorHook<RootState & ILoadingState> = useSelector;
