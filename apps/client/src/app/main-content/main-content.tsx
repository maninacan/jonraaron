import { useTranslation } from 'react-i18next';
import { LogoData, ToolData } from '@jonraaron/data';
import styles from './main-content.module.scss';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';

export function MainContent() {
  const { t } = useTranslation(['intro']);
  const logos: LogoData[] = [
    {
      name: 'Babel',
      href: 'https://babeljs.io/',
      logoUrl: '/assets/svgs/babel-seeklogo.com.svg',
      logoAlt: 'Babel Logo',
    },
    {
      name: 'Nx',
      href: 'https://nx.dev/',
      logoUrl: '/assets/svgs/nx-seeklogo.com.svg',
      logoAlt: 'Nx Logo',
    },
    {
      name: 'React',
      href: 'https://reactjs.org/',
      logoUrl: '/assets/svgs/react-seeklogo.com.svg',
      logoAlt: 'React Logo',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      logoUrl: '/assets/svgs/tailwind-css-seeklogo.com.svg',
      logoAlt: 'Tailwind CSS Logo',
    },
    {
      name: 'Storybook',
      href: 'https://storybook.js.org/',
      logoUrl: '/assets/svgs/storybook-seeklogo.com.svg',
      logoAlt: 'Storybook Logo',
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      logoUrl: '/assets/svgs/typescript-seeklogo.com.svg',
      logoAlt: 'Typescript Logo',
    },
    {
      name: 'Prettier',
      href: 'https://prettier.io/',
      logoUrl: '/assets/svgs/prettier-seeklogo.com.svg',
      logoAlt: 'Prettier Logo',
    },
    {
      name: 'Jest',
      href: 'https://jestjs.io/',
      logoUrl: '/assets/svgs/jest-seeklogo.com.svg',
      logoAlt: 'Jest Logo',
    },
    {
      name: 'Github',
      href: 'https://github.com/',
      logoUrl: '/assets/svgs/github-seeklogo.com.svg',
      logoAlt: 'Github Logo',
    },
    {
      name: 'Webpack',
      href: 'https://webpack.js.org/',
      logoUrl: '/assets/svgs/webpack-seeklogo.com.svg',
      logoAlt: 'Webpack Logo',
    },
    {
      name: 'Heroku',
      href: 'https://heroku.com',
      logoUrl: '/assets/svgs/heroku-seeklogo.com.svg',
      logoAlt: 'Heroku Logo',
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
          {t('intro:Welcome')}
        </h1>
        <p className="text-2xl mb-20">
          {t('intro:the-purpose-of-this-web-application')}{' '}
          {t('intro:the-complete-code-can-be-found')}
          <a
            className="text-primary-2"
            href="https://github.com/maninacan/jonraaron"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          . {t('intro:if-you-find-this-site-useful')}
          <a
            className="text-primary-2"
            href="https://github.com/maninacan/jonraaron"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
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
                className={classNames(styles['svg-logo'], 'm-6')}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 h-32 w-32 rounded rounded-md bg-white flex justify-center items-center">
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
                className="text-primary-2"
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
