import { configureStore } from '@reduxjs/toolkit';
import { TrackersSlice } from './trackers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

export const store = configureStore({
  reducer: {
    trackers: persistReducer(
      {
        key: 'trackers',
        storage,
      },
      TrackersSlice
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
