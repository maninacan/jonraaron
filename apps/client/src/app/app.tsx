import classNames from 'classnames';
import { DropDownWithIcons, Header } from '@jonraaron/common-components';
import { ThemeEnum } from '@jonraaron/data';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

import ThemeWrapper from './theme-wrapper/theme-wrapper';
import { ErrorBoundary } from 'react-error-boundary';
import { supportedLanguages, useI18n } from '../i18n';

export interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const { t } = useTranslation(['intro']);
  return (
    <div role="alert">
      <p>{t('intro:Something-went-wrong')}</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>{t('intro:Try-again')}</button>
    </div>
  );
};

export function App() {
  const { t } = useTranslation(['theme-dropdown']);
  const { changeLanguage, getCurrentLanguage } = useI18n();
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
                label: t('theme-dropdown:Light-Theme'),
                icon: 'jra-sun',
                onClick: () => {
                  selectLightTheme();
                },
              },
              {
                label: t('theme-dropdown:Dark-Theme'),
                icon: 'jra-moon',
                onClick: () => {
                  selectDarkTheme();
                },
              },
            ],
            [
              {
                label: t('theme-dropdown:System-Theme'),
                icon: 'jra-display',
                onClick: () => {
                  selectSystemTheme();
                },
              },
            ],
          ];

          const languagesDropdownMenu = [
            supportedLanguages.map((language) => ({
              label: language.name,
              icon: (
                <div className="mr-2">
                  <ReactCountryFlag
                    countryCode={language.country}
                    style={{
                      fontSize: '1.5em',
                    }}
                  />
                </div>
              ),
              onClick: () => {
                changeLanguage(language);
              },
            })),
          ];
          return (
            <Header
              leftContent={
                <span className="text-2xl text-black dark:text-white items-center">
                  Jon R Aaron
                </span>
              }
              rightContent={
                <>
                  <DropDownWithIcons
                    className="mr-2"
                    menu={languagesDropdownMenu}
                    buttonContent={
                      <ReactCountryFlag
                        countryCode={getCurrentLanguage().country}
                        style={{
                          fontSize: '1.5em',
                        }}
                      />
                    }
                  />
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
                </>
              }
            />
          );
        }}
      </ThemeWrapper>
    </ErrorBoundary>
  );
}

export default App;
