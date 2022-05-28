import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { DropDownMenuWithIcons } from '@jonraaron/data';
import { kebabCase } from 'lodash';

export interface DropDownWithIconsProps {
  menu: DropDownMenuWithIcons;
}

export function DropDownWithIcons({ menu }: DropDownWithIconsProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-black text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-indigo-500 dark:focus:ring-indigo-500">
          Options
          <i className="chevron-down -mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-50 dark:bg-gray-900 ring-1 ring-black dark:ring-white ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-800 focus:outline-none">
          {menu.map((section, index) => (
            <div key={index} className="py-1">
              {section.map(({ label, icon, href, onClick }) => {
                if (href && onClick) {
                  throw Error(
                    'Both href and onClick are not supported at the same time. Use one or the other.'
                  );
                }
                if (!href && !onClick) {
                  throw Error(
                    'Either href or onClick is required for this component'
                  );
                }
                return (
                  <Menu.Item key={kebabCase(label)}>
                    {({ active }) => {
                      if (href) {
                        return (
                          <a
                            href={href}
                            className={classNames(
                              active
                                ? 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50'
                                : 'text-gray-700 dark: text-gray-200',
                              'group flex items-center px-4 py-2 text-sm'
                            )}
                          >
                            {icon}
                            {label}
                          </a>
                        );
                      }
                      return (
                        <button
                          type="button"
                          onClick={onClick}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900 dark:text-gray-50'
                              : 'text-gray-700 dark:text-gray-200',
                            'w-full group flex items-center px-4 py-2 text-sm'
                          )}
                        >
                          {icon}
                          {label}
                        </button>
                      );
                    }}
                  </Menu.Item>
                );
              })}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDownWithIcons;
