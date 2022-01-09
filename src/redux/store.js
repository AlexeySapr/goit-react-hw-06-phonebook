import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phonebookReduser from './phonebook/phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phonebook: phonebookReduser,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;