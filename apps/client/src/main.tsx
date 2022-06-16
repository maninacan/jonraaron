import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app/app';
import { initI18n } from './i18n';
import { store } from './app/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { gsap } from 'gsap';
import { MotionPathPlugin, MotionPathHelper, GSDevTools } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper, GSDevTools);

initI18n(
  '/assets/locales/{{lng}}/{{ns}}.json',
  navigator.languages[0].toLowerCase()
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Auth0Provider
      domain={process.env['NX_AUTH0_DOMAIN'] || ''}
      clientId={process.env['NX_AUTH0_CLIENT_ID'] || ''}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </StrictMode>
);
