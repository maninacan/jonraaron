import { ErrorBoundary } from 'react-error-boundary';
import LogRocket from 'logrocket';
import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import setupLogRocketReact from 'logrocket-react';

import ThemeWrapper from './theme-wrapper/theme-wrapper';
import MainHeader from './main-header/main-header';
import MainContent from './main-content/main-content';
import ErrorFallback from './error-fallback/error-fallback';
import { removeUser, setUser } from './redux/userSlice';
import MobileHeader from './mobile-header/mobile-header';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, useI18n } from '../i18n';
import ReactCountryFlag from 'react-country-flag';
import { MenuSection, NavItem } from '@jonraaron/data';
import { useLocation } from 'react-router-dom';

LogRocket.init(process.env['NX_LOGROCKET_APP_ID'] || '');
setupLogRocketReact(LogRocket);

export function App() {
  const location = useLocation();
  const { changeLanguage } = useI18n();
  const { t } = useTranslation(['theme-dropdown', 'sub-nav']);
  const { user } = useAuth0();
  const dispatch = useDispatch();

  useMemo(() => {
    if (user) {
      LogRocket.identify(user?.sub || 'unknown', {
        name: user?.name || 'unknown',
        email: user?.email || 'unknown',
      });
      dispatch(setUser(user));
    } else {
      dispatch(removeUser());
    }
  }, [user]);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <ThemeWrapper>
        {(themeProps) => {
          const { selectDarkTheme, selectSystemTheme, selectLightTheme } =
            themeProps;

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

          const navList: MenuSection = [
            {
              label: t('sub-nav:home-page'),
              path: '/',
              isActive: location.pathname === '/',
            },
            {
              label: t('sub-nav:featured-components'),
              path: '/featured-components',
              isActive: location.pathname === '/featured-components',
            },
            {
              label: 'Storybook',
              href: process.env['NX_STORYBOOK_URL'] || '/unknown',
            },
          ];

          return (
            <div className="dark:text-gray-50">
              <MainHeader
                themeProps={themeProps}
                themeDropdownMenu={themeDropdownMenu}
                languagesDropdownMenu={languagesDropdownMenu}
              />
              <MobileHeader
                themeProps={themeProps}
                themeDropdownMenu={themeDropdownMenu}
                languagesDropdownMenu={languagesDropdownMenu}
                navList={navList}
              />
              <MainContent navList={navList} />
            </div>
          );
        }}
      </ThemeWrapper>
    </ErrorBoundary>
  );
}

export default App;
