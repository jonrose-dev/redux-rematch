import React from 'react';
import { IAppStore } from '../../store/AppStore';
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";

export const CounterView = () => {
  const appStore: IAppStore = useStore();

  const handleClick = () => {
    appStore.count.increment(1);
  }
  const handleClickAsync = () => {
    appStore.count.incrementAsync(10);
  }
  return (
    <div>
      <p>
        { appStore.count.isLoading ? 'Loading' : <>Current Count: <code>{appStore.count.count}</code></>}
      </p>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={handleClickAsync}>Async Increment</button>
    </ div>
  );
}

export const Counter = observer(CounterView);
