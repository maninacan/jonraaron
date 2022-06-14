import styles from './header.module.scss';
import { ReactNode } from 'react';
import classNames from 'classnames';

export interface HeaderProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  className?: string;
  dummyHeaderClassName?: string;
}

export function Header({
  leftContent,
  rightContent,
  className,
  dummyHeaderClassName,
}: HeaderProps) {
  return (
    <>
      <header
        className={classNames(
          'flex justify-between w-full h-20 px-10 py-5 border-b border-b-gray-300 dark:border-b-gray-700 bg-transparent fixed top-0 left-0',
          className
        )}
      >
        <div className="flex items-center">{leftContent}</div>
        <div className="flex items-center">{rightContent}</div>
      </header>
      <header
        className={classNames('dummy-header w-full h-20', dummyHeaderClassName)}
      />
    </>
  );
}

Header.defaultProps = {
  className: '',
};

export default Header;
