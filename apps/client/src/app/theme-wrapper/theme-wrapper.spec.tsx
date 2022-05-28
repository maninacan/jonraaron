import { render } from '@testing-library/react';
import ThemeWrapper from './theme-wrapper';

describe('ThemeWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeWrapper>stuff</ThemeWrapper>);
    expect(baseElement).toBeTruthy();
  });

  it('should call window.matchMedia', () => {
    render(<ThemeWrapper>Hello there</ThemeWrapper>);
    expect(global.matchMedia).toBeCalled();
  });
});
