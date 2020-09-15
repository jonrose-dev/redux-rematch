import { IPerson } from './person.types'
import { Dispatcher } from '..'

export const person = {
  state: {} as IPerson, // initial state

  reducers: {
    setPerson: (state: IPerson, payload: IPerson) => {
      return { ...state, ...payload }
    },
  },

  effects: (dispatch: Dispatcher) => ({
    updatePerson: async (payload: IPerson) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.person.setPerson(payload);
    },
  }),
}
