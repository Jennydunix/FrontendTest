// persistConfig.ts

import storage from 'redux-persist/lib/storage';
import { persistReducer, PersistConfig } from 'redux-persist';
import cardReducer from './cardSlice';

const persistConfig: PersistConfig<any> = {
  key: 'root', // Unique identifier for the persisted state
  storage, // Storage engine, defaults to localStorage
};

const persistedReducer = persistReducer(persistConfig, cardReducer);

export default persistedReducer;
