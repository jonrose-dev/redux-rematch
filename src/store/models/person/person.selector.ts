import { IPersonState } from './person.model';

export const selectPersonAddressString = ({ person }:{person: IPersonState}) => {
  const { firstName, lastName, line1, line2, city, state } = person;
  const hasName = firstName && lastName;
  const fullName = `${firstName} ${lastName}`;
  const address = [line1, line2, city, state].filter(str => !!str).join(', ');
  return hasName ? `${fullName}: ${address}` : address;
};