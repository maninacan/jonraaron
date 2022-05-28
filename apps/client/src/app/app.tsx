// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DropDownWithIcons, Header } from '@jonraaron/common-components';
import ThemeWrapper from './theme-wrapper/theme-wrapper';
import classNames from 'classnames';
import { ThemeEnum } from '@jonraaron/data';

export function App() {
  return (
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
  );
}

export default App;
