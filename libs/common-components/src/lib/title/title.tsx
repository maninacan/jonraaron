import styles from './title.module.scss';

/* eslint-disable-next-line */
export interface TitleProps {
  children: string;
}

export function Title({ children }: TitleProps) {
  return (
    <div className={styles['container']}>
      <h1 className="text-2xl flex justify-center my-5">{children}</h1>
    </div>
  );
}

export default Title;
