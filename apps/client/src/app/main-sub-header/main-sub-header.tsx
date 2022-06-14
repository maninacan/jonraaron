import { NavLink } from 'react-router-dom';
import { SubHeader } from '@jonraaron/common-components';
import { MenuSection, NavItem } from '@jonraaron/data';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

export interface MainSubHeaderProps {
  navList: MenuSection;
}

export function MainSubHeader({ navList }: MainSubHeaderProps) {
  return (
    <SubHeader
      className="hidden md:flex"
      dummyHeaderClassName="hidden md:flex"
      leftContent={
        <ul className="flex">
          {navList.map(({ path, label, href }) => {
            if (path && href)
              throw new Error('Only path or url is allowed...not both.');
            if (!path && !href)
              throw new Error('Either path or url is required.');

            if (path) {
              return (
                <li key={kebabCase(label)} className="mr-10">
                  <NavLink
                    className={({ isActive }) => {
                      return classNames(
                        'text-primary-2 hover:text-primary-3 dark:hover:text-primary-1',
                        { 'text-primary-3 dark:text-primary-1': isActive }
                      );
                    }}
                    to={path}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={kebabCase(label)} className="mr-10">
                <a
                  className="text-primary-2 hover:text-primary-3 dark:hover:text-primary-1 active:text-primary-3"
                  href={href}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      }
    />
  );
}

export default MainSubHeader;
