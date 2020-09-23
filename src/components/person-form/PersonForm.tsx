import React from 'react';
import { IAppStore } from '../../store/AppStore';
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";
import { useCreateStore } from "mobx-store-provider";
import { AddressFormStore, IAddressStoreForm } from '../../store/PersonStore';


export const PersonFormView = () => {
  const appStore: IAppStore = useStore();
  let addressFormStore: IAddressStoreForm = useCreateStore(() => AddressFormStore.create());

  const setValue = addressFormStore.setValue;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    appStore.person.updatePerson(addressFormStore);
  }

  return (
    <div>
      <p>Person Form</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>First Name:</span>
          <input id="firstName" value={addressFormStore.firstName} onChange={(e) => setValue('firstName', e.target.value) }/>
        </label>
        <label>
          <span>Last Name:</span>
          <input id="lastName" value={addressFormStore.lastName} onChange={(e) => setValue('lastName', e.target.value)}/>
        </label>
        <label>
          <span>Address Line 1:</span>
          <input id="line1" value={addressFormStore.line1} onChange={(e) => setValue('line1', e.target.value)}/>
        </label>
        <label>
          <span>Address Line 2:</span>
          <input id="line2" value={addressFormStore.line2} onChange={(e) => setValue('line2', e.target.value)}/>
        </label>
        <label>
          <span>City:</span>
          <input id="city" value={addressFormStore.city} onChange={(e) => setValue('city', e.target.value )}/>
        </label>
        <label>
          <span>State:</span>
          <input id="state" value={addressFormStore.state} onChange={(e) => setValue('state', e.target.value )}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export const PersonForm = observer(PersonFormView);
