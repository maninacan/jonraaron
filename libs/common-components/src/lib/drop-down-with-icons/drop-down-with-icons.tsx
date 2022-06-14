import { Fragment, ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import {
  BodyRelativeDirectionsEnum,
  DropDownMenuWithIcons,
} from '@jonraaron/data';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'react-router-dom';

export interface DropDownWithIconsProps {
  className?: string;
  menuButtonClassName?: string;
  dropDownClassName?: string;
  menu: DropDownMenuWithIcons;
  buttonContent?: ReactNode;
  showCaret?: boolean;
  cascadeNestedMenus?: BodyRelativeDirectionsEnum;
}

export function DropDownWithIcons({
  className,
  menuButtonClassName,
  dropDownClassName,
  menu,
  buttonContent,
  showCaret,
}: DropDownWithIconsProps) {
  return (
    <Menu
      as="div"
      className={classNames(className, 'relative inline-block text-left')}
    >
      <div>
        <Menu.Button
          className={classNames(
            'inline-flex w-full px-4 py-2 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800',
            menuButtonClassName
          )}
        >
          {buttonContent}
          {showCaret && (
            <i
              className="jra-chevron-down -mr-1 ml-2 h-5 w-5 text-gray-700 dark:text-gray-200"
              aria-hidden="true"
            />
          )}
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
        <Menu.Items
          className={classNames(
            'absolute mt-2 w-56 rounded-md shadow-lg bg-gray-50 dark:bg-gray-900 ring-1 ring-black dark:ring-white ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-800 focus:outline-none',
            dropDownClassName
          )}
        >
          {menu.map((section, index) => (
            <div key={index} className="py-1">
              {section.map(
                ({ label, icon, href, path, onClick, nestedMenu }) => {
                  const numActionItems = [
                    href,
                    path,
                    onClick,
                    nestedMenu,
                  ].filter((item) => !!item).length;

                  if (numActionItems > 1) {
                    throw Error(
                      'href, path, nestedMenu and onClick are not supported at the same time. Use only one.'
                    );
                  }
                  if (numActionItems < 1) {
                    throw Error(
                      'One of href, path, nestedMenu or onClick is required for this component'
                    );
                  }
                  return (
                    <Menu.Item key={kebabCase(label)}>
                      {({ active }) => {
                        const styleClasses = classNames(
                          active
                            ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50'
                            : 'text-gray-700 dark:text-gray-200',
                          'w-full group flex items-center px-4 py-2 text-sm'
                        );

                        const Icon = () => (
                          <>
                            {typeof icon === 'string' && (
                              <i className={classNames(icon, 'mr-2')} />
                            )}
                            {typeof icon === 'object' && icon}
                          </>
                        );

                        if (href) {
                          return (
                            <a href={href} className={styleClasses}>
                              <Icon />
                              {label}
                            </a>
                          );
                        } else if (path) {
                          return (
                            <Link to={path} className={styleClasses}>
                              <Icon />
                              {label}
                            </Link>
                          );
                        } else if (nestedMenu) {
                          return (
                            <DropDownWithIcons
                              className="w-full"
                              dropDownClassName="z-10"
                              menu={nestedMenu}
                              showCaret={false}
                              buttonContent={label}
                            />
                          );
                        }
                        return (
                          <button
                            type="button"
                            onClick={onClick}
                            className={styleClasses}
                          >
                            <Icon />
                            {label}
                          </button>
                        );
                      }}
                    </Menu.Item>
                  );
                }
              )}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

DropDownWithIcons.defaultProps = {
  className: '',
  showCaret: true,
  cascadeNestedMenus: BodyRelativeDirectionsEnum.RIGHT,
};

export default DropDownWithIcons;
