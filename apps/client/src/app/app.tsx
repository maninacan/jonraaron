// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { DropDownWithIcons, Header } from '@jonraaron/common-components';
import ThemeWrapper from './theme-wrapper/theme-wrapper';

export function App() {
  return (
    <ThemeWrapper>
      {({ selectLightTheme, selectDarkTheme, selectSystemTheme }) => {
        const themeDropdownMenu = [
          [
            {
              label: 'Light Theme',
              icon: <i className="sun" />,
              onClick: () => {
                selectLightTheme();
              },
            },
            {
              label: 'Dark Theme',
              icon: <i className="moon" />,
              onClick: () => {
                selectDarkTheme();
              },
            },
          ],
          [
            {
              label: 'System Theme',
              icon: <i className="computer" />,
              onClick: () => {
                selectSystemTheme();
              },
            },
          ],
        ];
        return (
          <Header
            leftContent={
              <span className="text-black dark:text-white items-center">
                Jon R Aaron
              </span>
            }
            rightContent={<DropDownWithIcons menu={themeDropdownMenu} />}
          />
        );
      }}
    </ThemeWrapper>
  );
}

export default App;
