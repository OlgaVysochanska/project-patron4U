import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import petsReducer from './pets/petsSlice';
import noticesReducer from './notices/noticesSlice';
import filterReducer from './filter/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  pets: petsReducer,
  notices: noticesReducer,
  filter: filterReducer,
});

export default rootReducer;
