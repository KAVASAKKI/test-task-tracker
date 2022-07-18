import moment from 'moment';

export const now = () => moment().toDate().getTime();

export const pad = (value: number) => String(value).padStart(2, '0');

export const getPrettifyCurrentDate = () =>
  `${moment().format('L')} - ${moment().locale('').format('LTS').slice(0, 8)}`;

export const getTimeComponents = (time: number) => {
  const dur = moment.duration(time, 'milliseconds');
  const hours = Math.floor(dur.asHours());
  const mins = Math.floor(dur.asMinutes()) - hours * 60;
  const secs = Math.floor(dur.asSeconds()) - hours * 60 * 60 - mins * 60;

  return { hours: pad(hours), mins: pad(mins), secs: pad(secs) };
};
