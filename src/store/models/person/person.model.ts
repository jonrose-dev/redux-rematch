import { RematchDispatch } from '@rematch/core'
import { Dispatcher } from '../../store'
import { IPerson } from './person.types'

export const person = {
  state: {} as IPerson, // initial state
  reducers: {
    setPerson: (state: IPerson, payload: IPerson) => {
      return { ...state, ...payload }
    },
  },
  effects: (_dispatch: RematchDispatch<any>) => {
    // This is a workaround for an type issue in the Rematch beta build 
    const dispatch = _dispatch as Dispatcher;

    return ({
      updatePerson: async (payload: IPerson) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        dispatch.person.setPerson(payload);
      },
    })
  },
}
