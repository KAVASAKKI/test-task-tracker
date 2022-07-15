import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addTracker = createAction('trackers/addTracker', ({ name, time }) => ({
  payload: { id: nanoid(), name, time, isPlaying: true },
}));

const toggleTracker = createAction('trackers/toggleTracker', (id) => ({
  payload: { id },
}));

const removeTracker = createAction('trackers/removeTracker', (id) => ({
  payload: { id },
}));

const actions = { addTracker, toggleTracker, removeTracker };

export default actions;
