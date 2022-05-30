import { render } from '@testing-library/react';

import MainContent from './main-content';

describe('MainContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainContent />);
    expect(baseElement).toBeTruthy();
  });
});
