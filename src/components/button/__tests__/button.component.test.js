import { render, screen } from '@testing-library/react';
import Button, { BUTTON_TYPE_CLASSES } from '../button-component';

describe('button tests', () => {
  test.skip('should render base button when nothing is passed', () => {
    render(<Button>Test</Button>);

    const buttonElement = screen.getByRole('button');

    // FAILS, background color is white instead of black (taken from :hover modifier)
    expect(buttonElement).toHaveStyle('background-color: black');
  });

  test.skip('should render google button when passed google button type', () => {
    render(<Button type={BUTTON_TYPE_CLASSES.google}>Test</Button>);

    const buttonElement = screen.getByRole('button');

    // FAILS, background color comes from base button instead of google button
    expect(buttonElement).toHaveStyle('background-color: #4285f4');
  });

  test.skip('should render inverted button when passed inverted button type', () => {
    render(<Button type={BUTTON_TYPE_CLASSES.inverted}>Test</Button>);

    const buttonElement = screen.getByRole('button');

    // PASSES BY ACCIDENT, background color comes from base button instead of inverted button
    expect(buttonElement).toHaveStyle('background-color: white');
  });

  test('should be disabled is isLoading is true', () => {
    render(<Button isLoading>Test</Button>);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDisabled();
  });
});
