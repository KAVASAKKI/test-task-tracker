import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TTraker } from 'types/types';
import { now } from 'utils/getTimeComponents';

interface IAddTracker {
  name: string;
}

const addTracker = createAction(
  'trackers/addTracker',
  ({ name }: IAddTracker) => ({
    payload: {
      id: nanoid(),
      name,
      startTime: now(),
      leftTime: 0,
      isPlay: true,
    },
  })
);

const updateTrackerTime = createAction(
  'trackers/updateTrackerTime',
  (payload: Pick<TTraker, 'id' | 'leftTime' | 'startTime'>) => ({
    payload,
  })
);

const toggleTracker = createAction(
  'trackers/toggleTracker',
  (payload: Pick<TTraker, 'id' | 'isPlay'>) => ({
    payload,
  })
);

const removeTracker = createAction('trackers/removeTracker', (id: string) => ({
  payload: { id },
}));

const actions = { addTracker, removeTracker, updateTrackerTime, toggleTracker };

export default actions;
