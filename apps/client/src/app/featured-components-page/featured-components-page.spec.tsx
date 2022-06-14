import { render } from '@testing-library/react';

import FeaturedComponentsPage from './featured-components-page';

describe('FeaturedComponentsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedComponentsPage />);
    expect(baseElement).toBeTruthy();
  });
});
