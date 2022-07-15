import { configureStore } from '@reduxjs/toolkit';
import { TrackersSlice } from './trackers';

export const store = configureStore({
  reducer: {
    trackers: TrackersSlice,
  },
  //   middleware,
  devTools: process.env.NODE_ENV === 'development',
});
