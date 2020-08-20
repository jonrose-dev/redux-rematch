import React from 'react';
import { selectPersonAddressString } from 'src/store/models/person/person.selector';
import { useRematch } from 'src/store/useRematch';

export const Person = () => {
  const addressString = useRematch(selectPersonAddressString);
  const loading = useRematch((state) => state.person.loading);
  return (
    <div>
      <p>Person</p>
      <p>{loading ? 'Loading' : addressString}&#8203;</p>
    </div>
  )
}