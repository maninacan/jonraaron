import { ReactNode } from 'react';
import classNames from 'classnames';

export interface SubHeaderProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  className?: string;
  dummyHeaderClassName?: string;
}

export function SubHeader({
  leftContent,
  rightContent,
  className,
  dummyHeaderClassName,
}: SubHeaderProps) {
  return (
    <>
      <header
        className={classNames(
          'flex justify-between w-full h-10 px-10 py-5 border-b border-b-gray-300 dark:border-b-gray-700 bg-transparent absolute top-0 left-0',
          className
        )}
      >
        <div className="flex items-center">{leftContent}</div>
        <div className="flex items-center">{rightContent}</div>
      </header>
      <header
        className={classNames('dummy-header w-full h-10', dummyHeaderClassName)}
      />
    </>
  );
}

SubHeader.defaultProps = {
  className: '',
};

export default SubHeader;
