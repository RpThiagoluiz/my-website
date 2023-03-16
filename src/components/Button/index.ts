import styled from 'styled-components';

type ButtonProps = {
  primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
display: flex;
align-items: center;
gap:15px;
  color: ${({ theme, primary }) =>
    primary ? theme.COLORS.FONT.PRIMARY : theme.COLORS.HIGHLIGHT.PINK};
  background: ${({ theme, primary }) =>
    primary ? theme.COLORS.HIGHLIGHT.PINK : 'transparent'};
  font-size: 20px;
  padding: 10px 30px;
  border:  ${({ theme, primary }) =>
    `2px solid `.concat(
      primary ? theme.COLORS.FONT.PRIMARY : theme.COLORS.HIGHLIGHT.PINK,
    )};
  border-radius: 8px;
      cursor: pointer;
`;
