import React from 'react';
import { dispatch } from '../../store/store';
import { useRematch } from '../../store/useRematch';

export const Home= () => {
  const { count, loading } = useRematch((state) => state.count);
  const handleClick = () => {
    dispatch.count.increment(1)
  }
  const handleClickAsync = () => {
    dispatch.count.incrementAsync(10);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { loading ? 'Loading' : <>Current Count: <code>{count}</code></>}
        </p>
        <button type="button" onClick={handleClick}>Increment</button>
        <button type="button" onClick={handleClickAsync}>Async Increment</button>
      </header>
    </div>
  );
}