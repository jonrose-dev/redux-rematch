import React from 'react';
import { useProvider, useCreateStore } from "mobx-store-provider";
import {AppStore } from "./store/AppStore";

// import UserDisplay from "./UserDisplay";
// import { store } from './store/store';
import { Home } from './components/home/Home';
import './App.css';

export const App: React.FC = () => {
  // Create the AppStore instance
  const appStore = useCreateStore(() => AppStore.create({}));

  // Get the Provider for the AppStore
  const Provider = useProvider();

  return (
    <Provider value={appStore}>
      <Home />
    </Provider>
  );
}

