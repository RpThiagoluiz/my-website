import styled from 'styled-components';

type HorizontalDividerProps = {
  widthPercentage?: number;
};

export const HorizontalDivider = styled.hr.attrs({
  size: 1,
})<HorizontalDividerProps>`
  width: ${({ widthPercentage }) => `${widthPercentage}%` ?? '100%'};
  margin: 15px 0;
`;
