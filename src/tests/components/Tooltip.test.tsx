import { screen, render, within } from '@testing-library/react';
import { Tooltip } from '../../components/Tooltip';

describe('Tooltip', () => {
  it('should be render ', () => {
    render(
      <Tooltip toolTipContainer='Chico'>
        <span>tooltip</span>
      </Tooltip>,
    );

    const tooltipDiv = screen.getByTestId('tooltipBox');
    const { getByText } = within(tooltipDiv);

    expect(getByText('Chico')).toBeInTheDocument();
  });
});
