import classNames from 'classnames';
import { DropDownWithIcons, Header } from '@jonraaron/common-components';
import { ThemeEnum } from '@jonraaron/data';

import ThemeWrapper from './theme-wrapper/theme-wrapper';
import { ErrorBoundary } from 'react-error-boundary';

export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <ThemeWrapper>
        {({
          isSystemSetting,
          theme,
          selectLightTheme,
          selectDarkTheme,
          selectSystemTheme,
        }) => {
          const themeDropdownMenu = [
            [
              {
                label: 'Light Theme',
                icon: 'jra-sun',
                onClick: () => {
                  selectLightTheme();
                },
              },
              {
                label: 'Dark Theme',
                icon: 'jra-moon',
                onClick: () => {
                  selectDarkTheme();
                },
              },
            ],
            [
              {
                label: 'System Theme',
                icon: 'jra-display',
                onClick: () => {
                  selectSystemTheme();
                },
              },
            ],
          ];
          return (
            <Header
              leftContent={
                <span className="text-2xl text-black dark:text-white items-center">
                  Jon R Aaron
                </span>
              }
              rightContent={
                <DropDownWithIcons
                  menu={themeDropdownMenu}
                  buttonContent={
                    <i
                      className={classNames(
                        {
                          'jra-moon':
                            theme === ThemeEnum.DARK && !isSystemSetting,
                        },
                        {
                          'jra-sun':
                            theme === ThemeEnum.LIGHT && !isSystemSetting,
                        },
                        { 'jra-display': isSystemSetting },
                        'mr-2'
                      )}
                    />
                  }
                />
              }
            />
          );
        }}
      </ThemeWrapper>
    </ErrorBoundary>
  );
}

export default App;
