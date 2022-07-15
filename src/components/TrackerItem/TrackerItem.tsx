import { useDispatch } from 'react-redux';
import { TrackersActions } from 'redux/trackers';
import { TTrakerItem } from 'types/types';
import styles from './TrackerItem.module.css';
import { IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

interface IProps {
  item: TTrakerItem;
}

export const TrackerItem = ({ item }: IProps) => {
  const dispatch = useDispatch();

  const onToggleTracker = (id: string) => {
    dispatch(TrackersActions.toggleTracker(id));
  };

  const onRemoveTracker = (id: string) => {
    dispatch(TrackersActions.removeTracker(id));
  };

  return (
    <li className={styles.item}>
      <p className={styles.name}>{item.name}</p>
      <div className={styles.info}>
        <p className={styles.time}>{item.time}</p>
        <div>
          {item.isPlaying ? (
            <IconButton onClick={() => onToggleTracker(item.id)}>
              <PauseCircleOutlineIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => onToggleTracker(item.id)}>
              <PlayCircleOutlineIcon />
            </IconButton>
          )}
          <IconButton onClick={() => onRemoveTracker(item.id)}>
            <RemoveCircleOutlineIcon color="error" />
          </IconButton>
        </div>
      </div>
    </li>
  );
};
