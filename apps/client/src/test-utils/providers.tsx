import { Provider } from 'react-redux';
import { ReactNode } from 'react';

import { store } from '../app/redux/store';

export interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <Provider store={store}>{children}</Provider>
);
