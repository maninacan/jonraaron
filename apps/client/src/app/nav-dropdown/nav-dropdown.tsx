import { DropDownMenuWithIcons } from '@jonraaron/data';
import { ReactNode } from 'react';
import { DropDownWithIcons } from '@jonraaron/common-components';

export interface NavDropdownProps {
  menu: DropDownMenuWithIcons;
  buttonContent?: ReactNode;
  showCaret?: boolean;
}

export function NavDropdown({
  menu,
  buttonContent,
  showCaret,
}: NavDropdownProps) {
  return (
    <DropDownWithIcons
      className="mr-2"
      menuButtonClassName="rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-indigo-500 dark:focus:ring-indigo-500"
      dropDownClassName="origin-top-right right-0"
      menu={menu}
      showCaret={showCaret}
      buttonContent={buttonContent}
    />
  );
}

export default NavDropdown;
