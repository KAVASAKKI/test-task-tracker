import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TrackersActions } from 'redux/trackers';
import { getPrettifyCurrentDate } from 'utils/getTimeComponents';
import { IconButton, PlayCircleIcon } from 'elements';
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

    if (!name) {
      return dispatch(
        TrackersActions.addTracker({
          name: `Tracker ${getPrettifyCurrentDate()}`,
        })
      );
    }

    dispatch(TrackersActions.addTracker({ name }));
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
