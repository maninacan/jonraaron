import { useAuth0 } from '@auth0/auth0-react';
import ReactCountryFlag from 'react-country-flag';
import classNames from 'classnames';
import { Header, IconButton } from '@jonraaron/common-components';
import { DropDownMenuWithIcons, Theme, ThemeEnum } from '@jonraaron/data';
import { useI18n } from '../../i18n';
import NavDropdown from '../nav-dropdown/nav-dropdown';

export interface MainHeaderProps {
  themeProps: Theme;
  themeDropdownMenu: DropDownMenuWithIcons;
  languagesDropdownMenu: DropDownMenuWithIcons;
}

export function MainHeader({
  themeProps,
  themeDropdownMenu,
  languagesDropdownMenu,
}: MainHeaderProps) {
  const { getCurrentLanguage } = useI18n();
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const { isSystemSetting, theme } = themeProps;

  return (
    <Header
      className="z-20 md:flex hidden"
      dummyHeaderClassName="md:flex hidden"
      leftContent={
        <span className="text-2xl text-black dark:text-white items-center">
          Jon R Aaron
        </span>
      }
      rightContent={
        <>
          <NavDropdown
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
          <NavDropdown
            menu={themeDropdownMenu}
            buttonContent={
              <i
                className={classNames(
                  {
                    'jra-moon': theme === ThemeEnum.DARK && !isSystemSetting,
                  },
                  {
                    'jra-sun': theme === ThemeEnum.LIGHT && !isSystemSetting,
                  },
                  { 'jra-display': isSystemSetting },
                  'mr-2'
                )}
              />
            }
          />
          {isLoading ? (
            <IconButton className="animate-spin" iconName="jra-spinner-solid" />
          ) : isAuthenticated ? (
            <IconButton
              onClick={logout}
              iconName="jra-arrow-right-from-bracket-solid"
            />
          ) : (
            <IconButton
              onClick={loginWithRedirect}
              iconName="jra-arrow-right-to-bracket-solid"
            />
          )}
        </>
      }
    />
  );
}

export default MainHeader;
