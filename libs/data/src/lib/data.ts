import { ReactNode } from 'react';

export type MenuItem = {
  label: string;
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
};

export type MenuSection = MenuItem[];

export type DropDownMenuWithIcons = MenuSection[];

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeToggleMethods = {
  isSystemSetting: boolean;
  theme: ThemeEnum;
  selectLightTheme: () => void;
  selectDarkTheme: () => void;
  selectSystemTheme: () => void;
};

export type Language = {
  code: string;
  name: string;
  country: string;
};
