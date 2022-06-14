import { render } from '@testing-library/react';

import MainSubHeader from './main-sub-header';
import { Providers } from '../../test-utils/providers';

describe('MainSubHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Providers>
        <MainSubHeader />
      </Providers>
    );
    expect(baseElement).toBeTruthy();
  });
});
