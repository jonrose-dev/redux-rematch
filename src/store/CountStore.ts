import {
  types,
  getParent,
  Instance,
  flow,
} from 'mobx-state-tree';


export const CountStore = types
  .model('CountStore', {
    isLoading: true,
    count: types.number,
  })

  .views(self => ({
    get app() {
      return getParent(self);
    },
  }))

  .actions(self => {

    function markLoading(loading: boolean) {
      self.isLoading = loading;
    }

    function increment(num: number = 1) {
      self.count = self.count+num;
    }

    const incrementAsync = flow(function*(num: number) {
      markLoading(true);
      yield new Promise(resolve => setTimeout(resolve, 1000));
      increment(num);
      markLoading(false);
    });

    return {
      markLoading,
      increment,
      incrementAsync,

      afterAttach() {
        self.isLoading = false;
      },
    };
  });

export type IMenuStore = Instance<typeof CountStore>;
