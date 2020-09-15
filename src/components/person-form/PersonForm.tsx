import React, { useReducer, Reducer } from 'react';
import { dispatch } from '../../store/store';

enum ActionType {
  FIRST_NAME,
  LAST_NAME,
  LINE1,
  LINE2,
  CITY,
  STATE,
  RESET
}
const initialState = {
  firstName: '',
  lastName: '',
  line1: '',
  line2: '',
  city: '',
  state: ''
}

const reducer: Reducer<typeof initialState, { type: ActionType; payload?: string }> = (state, action) => {
  switch (action.type) {
    case ActionType.FIRST_NAME:
      return { ...state, firstName: action.payload ?? '' }
    case ActionType.LAST_NAME:
      return { ...state, lastName: action.payload ?? '' }
    case ActionType.LINE1:
      return { ...state, line1: action.payload ?? '' }
    case ActionType.LINE2:
      return { ...state, line2: action.payload ?? '' }
    case ActionType.CITY:
      return { ...state, city: action.payload ?? '' }
    case ActionType.STATE:
      return { ...state, state: action.payload ?? '' }
    case ActionType.RESET:
      return initialState;
      default:
        throw new Error('Action invalid')
  }
}
export const PersonForm = () => {
  const [state, dispatchForm] = useReducer(reducer, initialState);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch.person.updatePerson(state);
    dispatchForm({ type: ActionType.RESET })
  }
  return (
    <div>
      <p>Person Form</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>First Name:</span>
          <input id="firstName" value={state.firstName} onChange={(e) => dispatchForm({ type: ActionType.FIRST_NAME, payload: e.target.value }) }/>
        </label>
        <label>
          <span>Last Name:</span>
          <input id="lastName" value={state.lastName} onChange={(e) => dispatchForm({ type: ActionType.LAST_NAME, payload: e.target.value })}/>
        </label>
        <label>
          <span>Address Line 1:</span>
          <input id="line1" value={state.line1} onChange={(e) => dispatchForm({ type: ActionType.LINE1, payload: e.target.value })}/>
        </label>
        <label>
          <span>Address Line 2:</span>
          <input id="line2" value={state.line2} onChange={(e) => dispatchForm({ type: ActionType.LINE2, payload: e.target.value })}/>
        </label>
        <label>
          <span>City:</span>
          <input id="city" value={state.city} onChange={(e) => dispatchForm({ type: ActionType.CITY, payload: e.target.value })}/>
        </label>
        <label>
          <span>State:</span>
          <input id="state" value={state.state} onChange={(e) => dispatchForm({ type: ActionType.STATE, payload: e.target.value })}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}