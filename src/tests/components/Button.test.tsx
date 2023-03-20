import { screen, render } from '@testing-library/react';
import { Button } from '../../components/Button';
import { hexToRGB } from '../../helpers/switchColorCodes';
import { ThemeProvider } from '../../provider/ThemeProvider';
import { defaultTheme } from '../../styles/themes/default';

describe('Button', () => {
  it('should be render', () => {
    render(
      <ThemeProvider>
        <Button>Chico</Button>
      </ThemeProvider>,
    );

    expect(screen.getByText('Chico')).toBeInTheDocument();
  });

  it('should be render button with primary props true', () => {
    render(
      <ThemeProvider>
        <Button primary>Chico</Button>
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');
    const styles = getComputedStyle(button);
    const primaryBackgroundColor = hexToRGB(
      defaultTheme.COLORS.HIGHLIGHT.PINK.toLowerCase(),
    );
    const primaryColor = hexToRGB(
      defaultTheme.COLORS.FONT.PRIMARY.toLowerCase(),
    ); //'rgb(238, 238, 238)';
    const primaryBorder = `2px solid ${defaultTheme.COLORS.FONT.PRIMARY.toLowerCase()}`;

    expect(styles.backgroundColor).toBe(primaryBackgroundColor);
    expect(styles.color).toBe(primaryColor);
    expect(styles.border).toBe(primaryBorder);
  });
});
