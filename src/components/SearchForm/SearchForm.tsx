import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TrackersActions } from 'redux/trackers';
import { getTimeComponents } from 'utils/getTimeComponents';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { IconButton } from '@mui/material';
import styles from './SearchForm.module.css';

const searchButtonStyles = {
  position: 'absolute',
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  padding: '0',
};

const searchIconStyles = {
  width: '48px',
  height: '48px',
  color: 'var(--accent-color)',
};

export const SearchForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentTime = Date.now();
    const { hours, mins, secs } = getTimeComponents(currentTime);

    if (!name) {
      const defaultName = `Tracker ${hours}:${mins}:${secs}`;
      dispatch(
        TrackersActions.addTracker({ name: defaultName, time: currentTime })
      );
      return;
    }

    dispatch(TrackersActions.addTracker({ name, time: currentTime }));
    setName('');
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <IconButton type="submit" sx={searchButtonStyles}>
        <PlayCircleIcon sx={searchIconStyles} />
      </IconButton>

      <input
        type="text"
        placeholder="Enter tracker name"
        className={styles.input}
        onChange={onChange}
        value={name}
      />
    </form>
  );
};
