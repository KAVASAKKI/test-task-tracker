import styles from './Notification.module.css';

interface IProps {
  text: string;
}

export const Notification = ({ text }: IProps) => {
  return <p className={styles.text}>{text}</p>;
};
