import { screen, render, within } from '@testing-library/react';
import { Typography } from '../../components/Typography';
import { hexToRGB } from '../../helpers/switchColorCodes';
import { ThemeProvider } from '../../provider/ThemeProvider';
import { defaultTheme } from '../../styles/themes/default';

describe('Typography', () => {
  it('should be render with all props ', () => {
    render(
      <ThemeProvider>
        <Typography
          fontSize={32}
          marginTop={20}
          marginBottom={15}
          marginRight={5}
          marginLeft={12}
          color='PRIMARY_REVERT'
          bold
        >
          Chico
        </Typography>
      </ThemeProvider>,
    );

    const typography = screen.getByRole('typography');
    const styles = getComputedStyle(typography);
    const color = hexToRGB(
      defaultTheme.COLORS.FONT.PRIMARY_REVERT.toLowerCase(),
    );

    const { getByText } = within(typography);

    expect(getByText('Chico')).toBeInTheDocument();
    expect(styles.fontSize).toBe('32px');
    expect(styles.color).toBe(color);
    expect(styles.marginTop).toBe('20px');
    expect(styles.marginBottom).toBe('15px');
    expect(styles.marginRight).toBe('5px');
    expect(styles.marginLeft).toBe('12px');
    expect(styles.fontWeight).toBe('bold');
  });
});
