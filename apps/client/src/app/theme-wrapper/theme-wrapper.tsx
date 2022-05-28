import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { ThemeEnum, ThemeToggleMethods } from '@jonraaron/data';

export interface ThemeWrapperProps {
  children: (methods: ThemeToggleMethods) => ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const [theme, setTheme] = useState<ThemeEnum>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ThemeEnum.DARK
      : ThemeEnum.LIGHT
  );

  const selectDarkTheme = () => {
    setTheme(ThemeEnum.DARK);
  };

  const selectLightTheme = () => {
    setTheme(ThemeEnum.LIGHT);
  };

  const selectSystemTheme = () => {
    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ThemeEnum.DARK
        : ThemeEnum.LIGHT
    );
  };

  return (
    <div className={classNames(theme === ThemeEnum.DARK ? 'dark' : '')}>
      <div className="bg-text-gray-50 dark:bg-gray-900 w-full h-screen top-0 left-0 fixed">
        {children({ selectDarkTheme, selectLightTheme, selectSystemTheme })}
      </div>
    </div>
  );
}

export default ThemeWrapper;
