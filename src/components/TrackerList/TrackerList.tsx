import { TTrakerItem } from 'types/types';
import { useSelector } from 'react-redux';
import { TrackersSelectors } from 'redux/trackers';
import { TrackerItem, Title } from 'components';
import styles from './TrackerList.module.css';

export const TrackerList = () => {
  const trackers = useSelector(TrackersSelectors.getTrackers);

  return (
    <div className={styles.container}>
      {trackers.length ? (
        <ul className={styles.list}>
          {trackers.map((item: TTrakerItem) => (
            <TrackerItem item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <Title text="TrackerList is empty" />
      )}
    </div>
  );
};
