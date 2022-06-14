import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { store } from '../app/redux/store';

export interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);
