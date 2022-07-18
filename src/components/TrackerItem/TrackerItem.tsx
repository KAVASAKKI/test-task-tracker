import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TrackersActions } from 'redux/trackers';
import { TTraker } from 'types/types';
import styles from './TrackerItem.module.css';
import { IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { getTimeComponents } from 'utils/getTimeComponents';

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
          leftTime: Date.now() - startTime + leftTime,
          startTime: Date.now(),
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
