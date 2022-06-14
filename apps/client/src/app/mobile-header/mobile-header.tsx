import { Header } from '@jonraaron/common-components';

import {
  DropDownMenuWithIcons,
  MenuSection,
  NavItem,
  Theme,
  ThemeEnum,
} from '@jonraaron/data';
import { useTranslation } from 'react-i18next';
import NavDropdown from '../nav-dropdown/nav-dropdown';
import { useAuth0 } from '@auth0/auth0-react';

export interface MobileHeaderProps {
  themeProps: Theme;
  themeDropdownMenu: DropDownMenuWithIcons;
  languagesDropdownMenu: DropDownMenuWithIcons;
  navList: MenuSection;
}

export function MobileHeader({
  themeProps,
  themeDropdownMenu,
  languagesDropdownMenu,
  navList,
}: MobileHeaderProps) {
  const { isSystemSetting, theme } = themeProps;
  const { t } = useTranslation(['theme-dropdown', 'sub-nav']);
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  const mobileMenu: DropDownMenuWithIcons = [
    [
      {
        label: t('sub-nav:languages'),
        icon: 'jra-moon',
        nestedMenu: languagesDropdownMenu,
      },
      {
        label:
          theme === ThemeEnum.DARK && !isSystemSetting
            ? t('theme-dropdown:Dark-Theme')
            : theme === ThemeEnum.LIGHT && !isSystemSetting
            ? t('theme-dropdown:Light-Theme')
            : t('theme-dropdown:System-Theme'),
        icon:
          theme === ThemeEnum.DARK && !isSystemSetting
            ? 'jra-moon'
            : theme === ThemeEnum.LIGHT && !isSystemSetting
            ? 'jra-sun'
            : 'jra-display',
        nestedMenu: themeDropdownMenu,
      },
    ],
    navList,
    [
      {
        label: isAuthenticated ? t('sub-nav:sign-out') : t('sub-nav:sign-in'),
        icon: 'jra-arrow-right-to-bracket-solid',
        onClick: isAuthenticated ? logout : loginWithRedirect,
      },
    ],
  ];

  return (
    <Header
      className="z-20 flex md:hidden"
      dummyHeaderClassName="flex md:hidden"
      leftContent={
        <span className="text-2xl text-black dark:text-white items-center">
          Jon R Aaron
        </span>
      }
      rightContent={
        <NavDropdown
          menu={mobileMenu}
          showCaret={false}
          buttonContent={<i className="jra-bars-solid" />}
        />
      }
    />
  );
}

export default MobileHeader;
