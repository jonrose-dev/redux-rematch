import { RootModel } from '../models';
import { RematchDispatch } from '../../legacy-types';

export interface ICountState {
  count: number;
  loading: boolean;
}

export const count = {
  state: { count: 0, loading: false } as ICountState, // initial state
  reducers: {
    // handle state changes with pure functions
    increment: (state: ICountState, payload: number) => {
      return { ...state, count: state.count + payload };
    },
    setLoading: (state: ICountState, payload: boolean) => {
      return { ...state, loading: payload };
    },
  },
  effects: (dispatch: RematchDispatch<RootModel>) => {
    // const dispatch = _dispatch as Dispatcher;
    return {
      // handle state changes with impure functions.
      // use async/await for async actions
      incrementAsync: async (payload: number) => {
        dispatch.count.setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch.count.increment(payload);
        dispatch.count.setLoading(false);
      },
    };
  },
};
