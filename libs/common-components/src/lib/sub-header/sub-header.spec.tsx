import { render } from '@testing-library/react';

import SubHeader from './sub-header';

describe('SubHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubHeader />);
    expect(baseElement).toBeTruthy();
  });
});
