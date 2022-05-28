import { ReactNode, useEffect } from 'react';

export interface ThemeWrapperProps {
  children: ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const theme = localStorage['theme'];
  useEffect(() => {
    if (
      theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black w-full h-screen top-0 left-0 fixed">
      {children}
    </div>
  );
}

export default ThemeWrapper;
