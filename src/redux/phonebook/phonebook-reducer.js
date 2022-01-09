import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.delContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: () => {},
});

export default combineReducers({
  contacts,
  filter,
});
