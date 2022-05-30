import styles from './main-header.module.scss';
import { DropDownWithIcons, Header } from '@jonraaron/common-components';
import ReactCountryFlag from 'react-country-flag';
import classNames from 'classnames';
import { ThemeEnum } from '@jonraaron/data';
import { supportedLanguages, useI18n } from '../../i18n';
import { useTranslation } from 'react-i18next';

export interface MainHeaderProps {
  themeProps: {
    isSystemSetting: boolean;
    theme: string;
    selectLightTheme: () => void;
    selectDarkTheme: () => void;
    selectSystemTheme: () => void;
  };
}

export function MainHeader({ themeProps }: MainHeaderProps) {
  const { t } = useTranslation(['theme-dropdown']);
  const { changeLanguage, getCurrentLanguage } = useI18n();
  const {
    isSystemSetting,
    theme,
    selectLightTheme,
    selectDarkTheme,
    selectSystemTheme,
  } = themeProps;
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
        </>
      }
    />
  );
}

export default MainHeader;