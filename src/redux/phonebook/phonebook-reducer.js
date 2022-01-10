import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';
import { getContacts } from './phonebook-selectors';

const isInContacts = (contacts, newContact) => {
  const { name, number } = newContact;
  const normalizedName = name.toLowerCase().replace(/\s+/g, '');
  const normalizedNumber = number.replace(/\D/g, '');
  return contacts.some(contact => {
    return (
      contact.name.toLowerCase().replace(/\s+/g, '') === normalizedName ||
      contact.number.replace(/\D/g, '') === normalizedNumber
    );
  });
};

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.delContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
