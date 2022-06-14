import { ReactNode } from 'react';

export type MenuItem = {
  label: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  path?: string;
  nestedMenu?: DropDownMenuWithIcons;
  isActive?: boolean;
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

export type LogoData = {
  name: string;
  href: string;
  logoUrl: string;
  logoAlt: string;
};

export type ToolData = {
  name: string;
  href: string;
};

export type NavItem = {
  label: string;
  path?: string;
  url?: string;
  isActive?: boolean;
};

export type Theme = {
  isSystemSetting: boolean;
  theme: string;
  selectLightTheme: () => void;
  selectDarkTheme: () => void;
  selectSystemTheme: () => void;
};

export enum BodyRelativeDirectionsEnum {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  FORWARD = 'FORWARD',
  BACKWARD = 'BACKWARD',
}
