import styles from './IconButton.module.css';

interface IProps {
  children: JSX.Element;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const IconButton = ({ children, onClick, type }: IProps) => (
  <button type={type} onClick={onClick} className={styles.button}>
    {children}
  </button>
);
