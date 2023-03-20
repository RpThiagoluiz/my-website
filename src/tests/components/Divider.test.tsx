import { screen, render } from '@testing-library/react';
import { HorizontalDivider } from '../../components/Divider/Horizontal';

describe('Button', () => {
  it('should be render width ', () => {
    render(<HorizontalDivider widthPercentage={50} />);

    const horizontalRole = screen.getByTestId('horizontalDivider');

    const styles = getComputedStyle(horizontalRole);
    expect(styles.width).toBe('50%');
  });
});
