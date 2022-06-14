import { ReactNode } from 'react';
import classNames from 'classnames';

export interface PageProps {
  className: string;
  children: ReactNode;
}

export function Page({ className, children }: PageProps) {
  return (
    <div
      className={classNames(
        'w-full flex flex-col items-center px-20 py-32 overflow-auto',
        className
      )}
    >
      <div className="max-w-[800px]">{children}</div>
    </div>
  );
}

export default Page;
