import { ReduxState } from 'types/types';

const getTrackers = (state: ReduxState) => state.trackers.list;

const selectors = { getTrackers };
export default selectors;
