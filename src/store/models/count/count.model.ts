import { RematchDispatch } from '@rematch/core'
import { Dispatcher } from '../../store'
import { ICountState } from './count.types'

export const count = {
  state: { count: 0, loading: false } as ICountState, // initial state
  reducers: {
    // handle state changes with pure functions
    increment: (state: ICountState, payload: number) => {
      return { ...state, count: state.count + payload }
    },
    setLoading: (state: ICountState, payload: boolean) => {
      return { ...state, loading: payload }
    }
  },
  effects: (_dispatch: RematchDispatch<any>) => {
    // This is a workaround for an type issue in the Rematch beta build 
    const dispatch = _dispatch as Dispatcher;

    return ({
      // handle state changes with impure functions.
      // use async/await for async actions
      incrementAsync: async (payload: number) => {
        dispatch.count.setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000))
        dispatch.count.increment(payload);
        dispatch.count.setLoading(false);
      },
    })
  },
}
