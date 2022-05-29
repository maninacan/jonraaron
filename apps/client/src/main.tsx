import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { initI18n } from "./i18n";

initI18n('/assets/locales/{{lng}}/{{ns}}.json', navigator.languages[0].toLowerCase());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
