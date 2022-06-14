import { NavLink, useLocation } from 'react-router-dom';
import { SubHeader } from '@jonraaron/common-components';
import { NavItem } from '@jonraaron/data';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

export function MainSubHeader() {
  const location = useLocation();
  const navList: NavItem[] = [
    {
      label: 'Home',
      path: '/',
      isActive: location.pathname === '/',
    },
    {
      label: 'Featured Components',
      path: '/featured-components',
      isActive: location.pathname === '/featured-components',
    },
    {
      label: 'Storybook',
      url: process.env['NX_STORYBOOK_URL'] || '/unknown',
    },
  ];
  return (
    <SubHeader
      leftContent={
        <ul className="flex">
          {navList.map(({ path, label, url }) => {
            if (path && url)
              throw new Error('Only path or url is allowed...not both.');
            if (!path && !url)
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
                  href={url}
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
