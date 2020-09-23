import {
  types,
  getParent,
  Instance,
  flow,
} from 'mobx-state-tree';


type AddressFormAttrs = 'firstName' | 'lastName' | 'line1' | 'line2' | 'city' | 'state';

export const AddressFormStore = types
  .model('AddressFormStore', {
    firstName: '',
    lastName: '',
    line1: '',
    line2: '',
    city: '',
    state: ''
  })
  .views(self => ({
    get app() {
      return getParent(self);
    },
  }))
  .actions(self => {

    function setValue(attr: AddressFormAttrs, value: string) {
      self[attr] = value;
    }

    return {
      setValue,
    };
  });

export type IAddressStoreForm = Instance<typeof AddressFormStore>;

export const PersonStore = types
  .model('PersonStore', {
    isLoading: true,

    firstName: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    line1: types.optional(types.string, ''),
    line2: types.optional(types.string, ''),
    city: types.optional(types.string, ''),
    state: types.optional(types.string, ''),
  })

  .views(self => ({
    get app() {
      return getParent(self);
    },
    get addressFormatted() {
      const { firstName, lastName, line1, line2, city, state } = self;

      const hasName = firstName && lastName;
      const fullName = `${firstName} ${lastName}`;
      const address = [line1, line2, city, state].filter(str => !!str).join(', ');
      return hasName ? `${fullName}: ${address}` : address;
    },
  }))
  .actions(self => {

    function markLoading(loading: boolean) {
      self.isLoading = loading;
    }

    function setValue(attr: AddressFormAttrs, value: string) {
      self[attr] = value;
    }

    const updatePerson = flow(function*(form: IAddressStoreForm) {
      markLoading(true);
      yield new Promise(resolve => setTimeout(resolve, 1000))

      // There's probably a better way to do this?
      setValue('firstName', form.firstName);
      setValue('lastName', form.lastName);
      setValue('line1', form.line1);
      setValue('line2', form.line2);
      setValue('city', form.city);
      setValue('state', form.state);

      markLoading(false);
    });

    return {
      markLoading,
      updatePerson,
      afterAttach() {
        self.isLoading = false;
      },
    };
  });

export type IMenuStore =  Instance<typeof PersonStore>;
