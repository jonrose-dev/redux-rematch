import React from 'react';
import { observer } from "mobx-react";
import { Counter } from "../counter/Counter";
import { PersonForm } from '../person-form/PersonForm';
import { Person } from '../person/Person';

export const HomeView = () => (
  <div className="App">
    <header className="App-header">
      <Counter />
      <Person />
      <PersonForm />
    </header>
  </div>
)

export const Home = observer(HomeView);
