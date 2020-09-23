import React from 'react';
import { IAppStore } from '../../store/AppStore';
import { observer } from "mobx-react";
import { useStore } from "mobx-store-provider";

export const PersonView = () => {
  const appStore: IAppStore = useStore();
  return(
    <div>
      <p>Person</p>
      <p>{appStore.isLoadingStore ? 'Loading' : appStore.person.addressFormatted}&#8203;</p>
    </div>
  )
}

export const Person = observer(PersonView);
