// store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './persistConfig';
import { persistStore } from 'redux-persist'; // Import persistStore

const store = configureStore({
  reducer: {
    cards: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store); // Create persistor

export default store;
