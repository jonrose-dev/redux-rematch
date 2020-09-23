import {
  types,
  Instance,
} from 'mobx-state-tree';
import { CountStore } from './CountStore';
import { PersonStore } from './PersonStore';


export const AppStore = types
  .model('AppStore', {
    identifier: types.optional(types.identifier, 'AppStore'),
    isBrowser: typeof window !== `undefined`,
    isLoading: true,
    count: types.optional(CountStore, {
      count: 100,
    }),
    person: types.optional(PersonStore, {}),
  })
  .views(self => ({
    get isLoadingStore() {
      return self.count.isLoading || self.person.isLoading;
    },
    get app() {
      return self;
    },
  }))
  .actions(self => {
    return {
      afterAttach() {
        self.isLoading = false;
      },
    }
  });

export type IAppStore = Instance<typeof AppStore>;
