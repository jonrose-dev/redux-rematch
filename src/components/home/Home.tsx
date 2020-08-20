import React from 'react';
import { Counter } from "../counter/Counter";
import { PersonForm } from '../person-form/PersonForm';
import { Person } from '../person/Person';

export const Home = () => (
  <div className="App">
    <header className="App-header">
      <Counter />
      <Person />
      <PersonForm />
    </header>
  </div>
)