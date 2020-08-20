import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from './store.types';

export const useRematch: TypedUseSelectorHook<RootState> = useSelector;
