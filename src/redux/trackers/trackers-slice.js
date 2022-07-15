import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const trackersSlice = createSlice({
  name: 'trackers',
  initialState,
  reducers: {
    addTracker: (state, { payload }) => {
      state.items.unshift(payload);
    },
    toggleTracker: (state, { payload }) => {
      state.items.find((item) =>
        item.id === payload.id
          ? item.isPlaying === false
            ? (item.isPlaying = true)
            : (item.isPlaying = false)
          : null
      );
    },
    removeTracker: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
  },
});

export default trackersSlice.reducer;
