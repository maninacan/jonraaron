import { render } from '@testing-library/react';

import App from './app';

jest.mock('logrocket', () => ({
  init: () => {},
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});
