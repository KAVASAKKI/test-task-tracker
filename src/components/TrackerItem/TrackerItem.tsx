import { TTraker } from 'types/types';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TrackersActions } from 'redux/trackers';
import { now, getTimeComponents } from 'utils/getTimeComponents';
import {
  IconButton,
  PlayCircleOutlineIcon,
  PauseCircleOutlineIcon,
  RemoveCircleOutlineIcon,
} from 'elements';
import styles from './TrackerItem.module.css';

interface IProps {
  item: TTraker;
}

export const TrackerItem = ({ item }: IProps) => {
  const { id, isPlay, leftTime, startTime, name } = item;
  const timerRef = useRef<null | NodeJS.Timer>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const clearTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };

    const calcTime = () => {
      dispatch(
        TrackersActions.updateTrackerTime({
          id,
          leftTime: now() - startTime + leftTime,
          startTime: now(),
        })
      );
    };

    clearTimer();
    if (isPlay) {
      calcTime();
      timerRef.current = setInterval(calcTime, 1000);
    }

    return () => {
      clearTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isPlay, id]);

  const onToggleTracker = () => {
    dispatch(
      TrackersActions.toggleTracker({
        id,
        isPlay: !isPlay,
      })
    );
  };

  const onRemoveTracker = (id: string) => {
    dispatch(TrackersActions.removeTracker(id));
  };

  const { hours, mins, secs } = getTimeComponents(leftTime);

  return (
    <li className={`${styles.item} ${isPlay ? styles.isActiveItem : ''}`}>
      <p className={styles.name}>{name}</p>
      <div className={styles.info}>
        <p className={`${styles.time} ${isPlay ? styles.isActiveTime : ''}`}>
          {`${hours}:${mins}:${secs}`}
        </p>
        <div className={styles.iconWrapper}>
          <IconButton onClick={onToggleTracker}>
            {isPlay ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
          </IconButton>

          <IconButton onClick={() => onRemoveTracker(id)}>
            <RemoveCircleOutlineIcon color="error" />
          </IconButton>
        </div>
      </div>
    </li>
  );
};
