export const getTimeComponents = (time: number) => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const dayHours = (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  const hours = pad(Math.floor(days > 0 ? dayHours * days * 24 : dayHours));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { hours, mins, secs };
};

export const pad = (value: number) => {
  return String(value).padStart(2, '0');
};

export const getPrettifyCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = pad(today.getMonth() + 1);
  const day = pad(today.getDate());
  const hours = pad(today.getHours());
  const minutes = pad(today.getMinutes());
  const seconds = pad(today.getSeconds());

  return `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`;
};
