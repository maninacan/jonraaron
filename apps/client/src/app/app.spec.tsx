import { render } from '@testing-library/react';

import App from './app';
import { Providers } from '../test-utils/providers';

jest.mock('logrocket', () => ({
  init: () => null,
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Providers>
        <App />
      </Providers>
    );

    expect(baseElement).toBeTruthy();
  });
});
