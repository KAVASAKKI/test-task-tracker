import styles from './Container.module.css';

interface IProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
