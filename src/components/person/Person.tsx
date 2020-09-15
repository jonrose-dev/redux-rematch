import React from 'react';
import { selectPersonAddressString } from 'src/store/models/person/person.selector';  
import { useRematch, useRematchLoading } from 'src/store/useRematch';

export const Person = () => {
  const addressString = useRematch(selectPersonAddressString);
  const loading = useRematchLoading((state) => state.loading.models.person);
  return(
    <div>
      <p>Person</p>
      <p>{loading ? 'Loading' : addressString}&#8203;</p>
    </div>
  )
}