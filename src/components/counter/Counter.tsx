import React from 'react';
import { dispatch } from '../../store/store';
import { useRematch, useRematchLoading } from '../../store/useRematch';

export const Counter = () => {
  const { count } = useRematch((state) => state.count);
  const loading = useRematchLoading((state) => state.loading?.models.count);
  const handleClick = () => {
    dispatch.count.increment(1)
  }
  const handleClickAsync = () => {
    dispatch.count.incrementAsync(10);
  }

  return (
    <div>
      <p>
        { loading ? 'Loading' : <>Current Count: <code>{count}</code></>}
      </p>
      <button type="button" onClick={handleClick}>Increment</button>
      <button type="button" onClick={handleClickAsync}>Async Increment</button>
    </ div>
  );
}