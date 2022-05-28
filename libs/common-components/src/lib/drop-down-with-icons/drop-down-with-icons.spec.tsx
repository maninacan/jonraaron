import { render } from '@testing-library/react';

import DropDownWithIcons from './drop-down-with-icons';

describe('DropDownWithIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DropDownWithIcons />);
    expect(baseElement).toBeTruthy();
  });
});
