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
  selectLightTheme: () => void;
  selectDarkTheme: () => void;
  selectSystemTheme: () => void;
};
