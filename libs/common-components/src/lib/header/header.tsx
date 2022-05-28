import styles from './header.module.scss';
import { ReactNode } from 'react';
import classNames from 'classnames';

export interface HeaderProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  className?: string;
}

export function Header({ leftContent, rightContent, className }: HeaderProps) {
  return (
    <header className={classNames('w-full px-10 py-5 border-b border-b-gray-300 dark:border-b-gray-700 bg-transparent fixed top-0 left-0', className)}>
      <div className={styles['left-content']}>{leftContent}</div>
      <div className={styles['right-content']}>{rightContent}</div>
    </header>
  );
}

Header.defaultProps = {
  className: '',
};

export default Header;
