import React, { useState } from 'react';
import { dispatch } from '../../store/store';

export const PersonForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch.person.updatePerson({ firstName, lastName, line1, line2, city, state })
    setFirstName('');
    setLastName('');
    setLine1('');
    setLine2('');
    setCity('');
    setState('');
  }
  return (
    <div>
      <p>Person Form</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>First Name:</span>
          <input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value) }/>
        </label>
        <label>
          <span>Last Name:</span>
          <input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label>
        <label>
          <span>Address Line 1:</span>
          <input id="line1" value={line1} onChange={(e) => setLine1(e.target.value)}/>
        </label>
        <label>
          <span>Address Line 2:</span>
          <input id="line2" value={line2} onChange={(e) => setLine2(e.target.value)}/>
        </label>
        <label>
          <span>City:</span>
          <input id="city" value={city} onChange={(e) => setCity(e.target.value)}/>
        </label>
        <label>
          <span>State:</span>
          <input id="state" value={state} onChange={(e) => setState(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}