import { render } from '@testing-library/react';

import MainHeader from './main-header';

describe('MainHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainHeader />);
    expect(baseElement).toBeTruthy();
  });
});
