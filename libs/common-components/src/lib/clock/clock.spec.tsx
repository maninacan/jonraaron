import { render } from '@testing-library/react';

import Clock from './clock';

describe('Clock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Clock />);
    expect(baseElement).toBeTruthy();
  });
});
