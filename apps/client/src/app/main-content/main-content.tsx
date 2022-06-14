import { useTranslation } from 'react-i18next';
import { LogoData, ToolData } from '@jonraaron/data';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import { useAuth0 } from '@auth0/auth0-react';
import { selectUserName } from '../redux/userSlice';

import styles from './main-content.module.scss';
import { useSelector } from 'react-redux';

export function MainContent() {
  const { t } = useTranslation(['intro']);
  const { isAuthenticated } = useAuth0();
  const userName = useSelector(selectUserName);

  const logos: LogoData[] = [
    {
      name: 'Auth0',
      href: 'https://auth0.com/',
      logoUrl: '/assets/images/auth0-seeklogo.com.svg',
      logoAlt: 'Auth0 Logo',
    },
    {
      name: 'Babel',
      href: 'https://babeljs.io/',
      logoUrl: '/assets/images/babel-seeklogo.com.svg',
      logoAlt: 'Babel Logo',
    },
    {
      name: 'Nx',
      href: 'https://nx.dev/',
      logoUrl: '/assets/images/nx-seeklogo.com.svg',
      logoAlt: 'Nx Logo',
    },
    {
      name: 'React',
      href: 'https://reactjs.org/',
      logoUrl: '/assets/images/react-seeklogo.com.svg',
      logoAlt: 'React Logo',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      logoUrl: '/assets/images/tailwind-css-seeklogo.com.svg',
      logoAlt: 'Tailwind CSS Logo',
    },
    {
      name: 'Storybook',
      href: 'https://storybook.js.org/',
      logoUrl: '/assets/images/storybook-seeklogo.com.svg',
      logoAlt: 'Storybook Logo',
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      logoUrl: '/assets/images/typescript-seeklogo.com.svg',
      logoAlt: 'Typescript Logo',
    },
    {
      name: 'Prettier',
      href: 'https://prettier.io/',
      logoUrl: '/assets/images/prettier-seeklogo.com.svg',
      logoAlt: 'Prettier Logo',
    },
    {
      name: 'Jest',
      href: 'https://jestjs.io/',
      logoUrl: '/assets/images/jest-seeklogo.com.svg',
      logoAlt: 'Jest Logo',
    },
    {
      name: 'Github',
      href: 'https://github.com/',
      logoUrl: '/assets/images/github-seeklogo.com.svg',
      logoAlt: 'Github Logo',
    },
    {
      name: 'Webpack',
      href: 'https://webpack.js.org/',
      logoUrl: '/assets/images/webpack-seeklogo.com.svg',
      logoAlt: 'Webpack Logo',
    },
    {
      name: 'Heroku',
      href: 'https://heroku.com',
      logoUrl: '/assets/images/heroku-seeklogo.com.svg',
      logoAlt: 'Heroku Logo',
    },
    {
      name: 'Hotjar',
      href: 'https://insights.hotjar.com/',
      logoUrl: '/assets/images/logo-hotjar.svg',
      logoAlt: 'Hotjar Logo',
    },
    {
      name: 'Logrocket',
      href: 'https://logrocket.com/',
      logoUrl: '/assets/images/logrocket-logo.png',
      logoAlt: 'Logrocket Logo',
    },
    {
      name: 'Redux',
      href: 'https://redux.js.org/',
      logoUrl: '/assets/images/redux-seeklogo.com.svg',
      logoAlt: 'Redux Logo',
    },
  ].sort((a: LogoData, b: LogoData) => {
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0;
    return -1;
  });

  const tools: ToolData[] = [
    {
      name: 'Doppler',
      href: 'https://www.doppler.com/',
    },
    {
      name: 'Fontello',
      href: 'https://fontello.com/',
    },
    {
      name: 'Husky',
      href: 'https://typicode.github.io/husky/#/',
    },
    {
      name: 'Express',
      href: 'https://expressjs.com/',
    },
    {
      name: 'i18next',
      href: 'https://www.i18next.com/',
    },
    {
      name: 'Lodash',
      href: 'https://lodash.com/',
    },
    {
      name: 'react-country-flag',
      href: 'https://www.npmjs.com/package/react-country-flag',
    },
    {
      name: 'Cypress',
      href: 'https://www.cypress.io/',
    },
    {
      name: 'Paletton',
      href: 'https://paletton.com/',
    },
    {
      name: 'Seeklogo',
      href: 'https://seeklogo.com/',
    },
    {
      name: 'Fontawesome',
      href: 'https://fontawesome.com/',
    },
  ].sort((a: ToolData, b: ToolData) => {
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0;
    return -1;
  });

  return (
    <div
      className={classNames(
        styles['main-content'],
        'w-full flex flex-col items-center px-20 py-32 overflow-auto'
      )}
    >
      <div className="max-w-[800px]">
        <h1
          className={classNames(
            styles['welcome-text'],
            'text-center text-[48px] mb-10'
          )}
        >
          {t('intro:Welcome', {
            userName: isAuthenticated ? ` ${userName}` : '',
          })}
        </h1>
        <p className="text-2xl mb-20">
          {t('intro:the-purpose-of-this-web-application')}{' '}
          {t('intro:the-complete-code-can-be-found')}
          <a
            className="text-primary-2 hover:text-primary-3 dark:hover:text-primary-1"
            href="https://github.com/maninacan/jonraaron"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          . {t('intro:the-shared-components-can-be-found-in')}
          <a
            className="text-primary-2 hover:text-primary-3 dark:hover:text-primary-1"
            href={process.env['NX_STORYBOOK_URL']}
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook
          </a>
          . {t('intro:if-you-find-this-site-useful')}
          <a
            className="text-primary-2 hover:text-primary-3 dark:hover:text-primary-1"
            href="https://github.com/maninacan/jonraaron/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Issues
          </a>
          .
        </p>
        <p className="text-2xl mb-20">
          {t('intro:The-following-are-a-list-of-tools')}
        </p>
        <div className="flex flex-wrap mb-10">
          {logos.map(({ name, href, logoUrl, logoAlt }) => (
            <div
              key={kebabCase(name)}
              className="flex flex-col justify-center items-center"
            >
              <a
                className="m-6"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 h-32 w-32 rounded rounded-md bg-white flex justify-center items-center hover:shadow dark:hover:shadow-md dark:hover:shadow-white">
                  <img className="max-h-28" src={logoUrl} alt={logoAlt} />
                </div>
              </a>
              <span>{name}</span>
            </div>
          ))}
        </div>
        <ul className="flex flex-wrap">
          {tools.map(({ name, href }) => (
            <li key={kebabCase(name)} className="mx-3 my-6">
              <a
                className="text-primary-2 hover:text-primary-3 dark:hover:text-primary-1"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
