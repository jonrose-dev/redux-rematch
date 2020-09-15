import { RematchDispatch } from '@rematch/core'
import { Dispatcher } from '../../store'
import { IPerson } from './person.types'

export interface IPersonState extends IPerson {
  loading: boolean;
}
export const person = {
  state: { loading: false } as IPersonState, // initial state
  reducers: {
    // handle state changes with pure functions
    setPerson: (state: IPersonState, payload: IPerson) => {
      return { ...state, ...payload }
    },
    setLoading: (state: IPersonState, loading: boolean) => {
      return { ...state, loading }
    }
  },
  effects: (_dispatch: RematchDispatch<any>) => {
    // This is a workaround for an type issue in the Rematch beta build 
    const dispatch = _dispatch as Dispatcher;

    return ({
      // handle state changes with impure functions.
      // use async/await for async actions
      updatePerson: async (payload: IPerson) => {
        dispatch.person.setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000))
        dispatch.person.setPerson(payload);
        dispatch.person.setLoading(false);
      },
    })
  },
}
