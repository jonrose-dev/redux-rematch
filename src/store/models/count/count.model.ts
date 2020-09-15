import { Dispatcher } from '..'
import { ICountState } from './count.types'

export const count = {
  state: { count: 0 } as ICountState, // initial state

  reducers: {
    increment: (state: ICountState, payload: number) => {
      return { ...state, count: state.count + payload }
    }
  },

  effects: (dispatch: Dispatcher) => ({
    incrementAsync: async (payload: number) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
}
