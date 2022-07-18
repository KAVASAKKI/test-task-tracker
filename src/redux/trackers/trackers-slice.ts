import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import { TTraker } from 'types/types';
import { now } from 'utils/getTimeComponents';

interface IRemoveTracker {
  payload: { id: string };
}

const trackersSlice = createSlice({
  name: 'trackers',
  initialState: {
    list: [] as TTraker[],
  },
  reducers: {
    addTracker: (state, { payload }: { payload: TTraker }) => {
      return (state = { ...state, list: [payload, ...state.list] });
    },

    updateTrackerTime: (
      state,
      {
        payload: { id, ...newState },
      }: { payload: Pick<TTraker, 'id' | 'leftTime' | 'startTime'> }
    ) => {
      return (state = {
        ...state,
        list: state.list.map((item) =>
          item.id !== id
            ? item
            : {
                ...item,
                ...newState,
              }
        ),
      });
    },

    toggleTracker: (
      state,
      { payload }: { payload: Pick<TTraker, 'id' | 'isPlay'> }
    ) => {
      return (state = {
        ...state,
        list: state.list.map((item) =>
          item.id !== payload.id
            ? item
            : {
                ...item,
                isPlay: payload.isPlay,
                startTime: payload.isPlay ? now() : item.startTime,
              }
        ),
      });
    },

    removeTracker: (state, { payload }: IRemoveTracker) => {
      return (state = {
        ...state,
        list: state.list.filter((item) => item.id !== payload.id),
      });
    },
  },
});

export default trackersSlice.reducer;
