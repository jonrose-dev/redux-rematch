import { RematchDispatch } from '@rematch/core'
import { Dispatcher } from '../../store'
import { ICountState } from './count.types'

export const count = {
  state: { count: 0 } as ICountState, // initial state
  reducers: {
    increment: (state: ICountState, payload: number) => {
      return { ...state, count: state.count + payload }
    }
  },
  effects: (_dispatch: RematchDispatch<any>) => {
    // This is a workaround for an type issue in the Rematch beta build 
    const dispatch = _dispatch as Dispatcher;

    return ({
      incrementAsync: async (payload: number) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        dispatch.count.increment(payload);
      },
    })
  },
}
