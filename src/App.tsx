import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './components/home/Home';
import './App.css';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

