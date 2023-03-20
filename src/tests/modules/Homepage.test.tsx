import { screen, render } from '@testing-library/react';
import { HomePage } from '../../modules/Home';
import { ThemeProvider } from '../../provider/ThemeProvider';

describe('first', () => {
  it('should be correctly render home page', () => {
    render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>,
    );
    expect(screen.getByText("HI THERE! I'M")).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
  });
});
