import { useSelector } from 'react-redux';
import { TrackersSelectors } from 'redux/trackers';
import { TrackerItem, Notification } from 'components';
import styles from './TrackerList.module.css';

export const TrackerList = () => {
  const trackers = useSelector(TrackersSelectors.getTrackers);

  return (
    <div className={styles.container}>
      {trackers.length ? (
        <ul className={styles.list}>
          {trackers.map((tracker) => (
            <TrackerItem item={tracker} key={tracker.id} />
          ))}
        </ul>
      ) : (
        <Notification text="TrackerList is empty" />
      )}
    </div>
  );
};
